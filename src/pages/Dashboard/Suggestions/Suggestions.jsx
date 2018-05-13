import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Query } from "react-apollo"
import gql from "graphql-tag"

import { planIds } from 'common/constants'
import { usingMocks } from 'common/utils/featureTests'
import mockData from 'common/mocks/suggestionsData.json'

import withDashboard from 'components/withDashboard'
import withCharts from 'components/Charts/withCharts'
import StatisticsContainer from 'components/statisticsContainer'
import StatisticsBox from 'components/statisticsContainer/StatisticsBox'
import Suggestion from './Suggestion'

import { SuggestionsList } from './styles'

// let selectedPlan = hasStorage && localStorage.getItem('selectedPlan') ? localStorage.getItem('selectedPlan').toUpperCase() : 'ENTRY'

const SUGGESTIONS_QUERY = gql`
  query {
    Plan(id: "${planIds.ENTRY}") {
        name
        suggestions
        launchStatistics
        statistics
    }
  }
`

class Suggestions extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedPlan !== this.props.selectedPlan) {
            this.props.refetch({ id: planIds[nextProps.selectedPlan.toUpperCase()] })
        }
    }

    shouldComponentUpdate(nextProps) {
        // Only update if the selectedPlan and plan are the same.
        if (nextProps.Plan) {
            return nextProps.selectedPlan === nextProps.Plan.name
        }
        return true
    }

    render() {
        const { trades, serialChartsReady } = this.props

        return <Query query={SUGGESTIONS_QUERY}>
            {({ loading, error, data }) => {

            if (loading) return <p>Loading...</p>
            if (error && !usingMocks) return <p>Error loading</p>

            const plan = data ? data.Plan : mockData.Plan
            if (!plan || !plan.suggestions) { return null }
    
            const suggestions = trades || plan.suggestions.filter(sugg => !sugg.model || sugg.action === 'SELL')

            return (
                <React.Fragment>
                    <StatisticsContainer>
                        <StatisticsBox title="Annual growth" value={`${plan.statistics.CAGR}%`} icon="chart-line" />
                        <StatisticsBox title="Sold with profit" value={`${plan.statistics.winRatio.toFixed(2)}%`} icon="chart-pie" />
                        <StatisticsBox title="Suggestions" value={suggestions.length} icon="list-ul" />
                        <StatisticsBox title="Percent in cash" value={`${plan.launchStatistics.percentInCash.toFixed(2)}%`} icon="dollar-sign" />
                    </StatisticsContainer>
                    <SuggestionsList>
                        {suggestions.map(sugg => <Suggestion suggestion={sugg} key={sugg.ticker} serialChartsReady={serialChartsReady} />)}
                    </SuggestionsList>
                </React.Fragment>
            )
        }}
        </Query>
    }
}

Suggestions.propTypes = {
    Plan: PropTypes.object,
    trades: PropTypes.array,
    selectedPlan: PropTypes.string,
    refetch: PropTypes.func,
}

export default withDashboard(withCharts(Suggestions))