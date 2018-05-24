import React, { Component } from 'react'
import gql from "graphql-tag"
import { Query } from "react-apollo"
import { planIds, marketIds } from 'common/constants'
import PlanContext from 'common/Contexts/PlanContext'
import withDashboard from 'components/withDashboard'
import withCharts from 'components/Charts/withCharts'
import { Table, TableHead, TableBody, TableRow, TableHeadCell } from 'components/Table'
import StatisticsContainer from 'components/statisticsContainer'
import StatisticsBox from 'components/statisticsContainer/StatisticsBox'
import PortfolioItem from 'components/PortfolioItem'

const PORTFOLIO_QUERY = gql`
    query plan($id: ID!) {
        Plan(id: $id) {
            name
            portfolio
            info
            launchStatistics
            statistics
            portfolioYields
        },
        DJIA: Market(id: "${marketIds.DJIA}") {
            name
            pricesSince2009
        }
    }
`

class Portfolio extends Component {
    render() {
        return <PlanContext.Consumer>
        {({ planName }) => (
            <Query query={PORTFOLIO_QUERY} variables={{ id: planIds[planName] }}>
            {({ loading, error, data }) => {

                if (loading) return <p>Loading...</p>
                const plan = data ? data.Plan : {}

                return (
                    <React.Fragment>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableHeadCell>Name</TableHeadCell>
                                    <TableHeadCell>Allocation</TableHeadCell>
                                    <TableHeadCell>Return</TableHeadCell>
                                    <TableHeadCell>Cost basis</TableHeadCell>
                                    <TableHeadCell>Last price</TableHeadCell>
                                    <TableHeadCell>Days owned</TableHeadCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {plan.portfolio.map(stock => (
                                    <PortfolioItem stock={stock} key={stock.ticker} />
                                ))}
                            </TableBody>
                        </Table>
                        <StatisticsContainer>
                            <StatisticsBox title="Annual growth" value={`${plan.statistics.CAGR}%`} icon="chart-line" />
                            <StatisticsBox title="Sold with profit" value={`${plan.statistics.winRatio.toFixed(2)}%`} icon="chart-pie" />
                            <StatisticsBox title="Holdings" value={plan.portfolio.length} icon="list-ul" />
                            <StatisticsBox title="Percent in cash" value={`${plan.launchStatistics.percentInCash.toFixed(2)}%`} icon="dollar-sign" />
                        </StatisticsContainer>  
                    </React.Fragment>
                )
            }}
            </Query>
        )}
        </PlanContext.Consumer>
    }
}

export default withDashboard(withCharts(Portfolio))
