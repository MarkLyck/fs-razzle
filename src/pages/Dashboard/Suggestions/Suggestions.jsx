import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import fecha from 'fecha'

import PlanContext from 'common/Contexts/PlanContext'
import { planIds } from 'common/constants'
import { usingMocks } from 'common/utils/featureTests'
import hasPermissions from 'common/utils/hasPermissions'
import mockData from 'common/mocks/suggestionsData.json'

import withDashboard from 'components/withDashboard'
import withCharts from 'components/Charts/withCharts'
import StatisticsContainer from 'components/statisticsContainer'
import StatisticsBox from 'components/statisticsContainer/StatisticsBox'
import Suggestion from 'components/Suggestion'
import SuggestionsLoader from 'components/Loading/SuggestionsLoader'
import LoadingError from 'components/Error/LoadingError'
import PlanPermissionError from 'components/Error/PlanPermissionError'

import { SuggestionsList, LastUpdated, DateLabel } from './styles'

const SUGGESTIONS_QUERY = gql`
  query plan($id: ID!, $tickers: [String!]) {
    Plan(id: $id) {
      suggestions
      launchStatistics
      statistics
      updatedAt
    }
    allStocks(filter: { ticker_in: $tickers }) {
      ticker
      latestPrice
      sixMonthsPrices
    }
  }
`

const STOCKS_QUERY = gql`
  query stocks($tickers: [String!]) {
    allStocks(filter: { ticker_in: $tickers }) {
      ticker
      latestPrice
      sixMonthsPrices
    }
  }
`

class Suggestions extends Component {
  state = { tickers: [] }

  componentDidUpdate(prevProps) {
    if (this.props.selectedPlan !== prevProps.selectedPlan) {
      this.props.refetch({ id: planIds[this.props.selectedPlan.toUpperCase()] })
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
    const { location, serialChartsReady, userPlan, userType, history } = this.props

    return (
      <PlanContext.Consumer>
        {({ planName }) => (
          <Query query={SUGGESTIONS_QUERY} variables={{ id: planIds[planName] }}>
            {({ loading, error, data }) => {
              const suggestionsType = location.pathname.includes('/trades') ? 'Trades' : 'Suggestions'
              if (loading) return <SuggestionsLoader suggestionsType={suggestionsType} />
              if (!usingMocks && (error || !data)) return <LoadingError error={error} />

              const plan = data.Plan || mockData.Plan

              const listStatTitle = suggestionsType === 'Trades' ? 'Trades this month' : 'Suggestions'
              const hasPlanPerms = hasPermissions(planName, userPlan, userType)

              const suggestions = plan.suggestions
                .filter(sugg => {
                  if (location.pathname.includes('trades')) return sugg.model
                  return !sugg.model || sugg.action === 'SELL'
                })
                .sort(sugg => (sugg.action === 'SELL' ? 1 : -1))

              return (
                <React.Fragment>
                  <StatisticsContainer>
                    <StatisticsBox title="Annual growth" value={`${plan.statistics.CAGR}%`} icon="chart-line" />
                    <StatisticsBox
                      title="Sold with profit"
                      value={`${plan.statistics.winRatio.toFixed(2)}%`}
                      icon="chart-pie"
                    />
                    <StatisticsBox title={listStatTitle} value={suggestions.length} icon="list-ul" />
                    <StatisticsBox
                      title="Percent in cash"
                      value={`${plan.launchStatistics.percentInCash.toFixed(2)}%`}
                      icon="dollar-sign"
                    />
                  </StatisticsContainer>
                  {hasPlanPerms === false && <PlanPermissionError planName={planName} history={history} />}
                  {hasPlanPerms === true && (
                    <SuggestionsList>
                      <Query
                        query={STOCKS_QUERY}
                        variables={{
                          tickers: suggestions.map(sugg => sugg.ticker),
                        }}
                      >
                        {({ loading, error, data }) => {
                          const allStocks = data && data.allStocks ? data.allStocks : []
                          return suggestions.map(sugg => (
                            <Suggestion
                              suggestion={sugg}
                              stock={allStocks.filter(stock => stock.ticker === sugg.ticker)[0] || null}
                              loading={loading}
                              error={error}
                              key={sugg.ticker + planName}
                              serialChartsReady={serialChartsReady}
                              suggestionsType={suggestionsType}
                            />
                          ))
                        }}
                      </Query>
                    </SuggestionsList>
                  )}
                  {plan.updatedAt && (
                    <LastUpdated>
                      Last updated: <DateLabel>{fecha.format(new Date(plan.updatedAt), 'MMM D, YYYY')}</DateLabel>
                    </LastUpdated>
                  )}
                </React.Fragment>
              )
            }}
          </Query>
        )}
      </PlanContext.Consumer>
    )
  }
}

Suggestions.propTypes = {
  serialChartsReady: PropTypes.bool,
  pieChartsReady: PropTypes.bool,
  chartError: PropTypes.bool,
}

export default withDashboard(withCharts(Suggestions))
