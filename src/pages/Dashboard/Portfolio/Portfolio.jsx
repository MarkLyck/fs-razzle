import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import fecha from 'fecha'
import { planIds, marketIds } from 'common/constants'
import PlanContext from 'common/Contexts/PlanContext'
import withDashboard from 'components/withDashboard'
import withCharts from 'components/Charts/withCharts'
import { TableBody, TableRow, TableHeadCell } from 'components/Table'
import PortfolioHeader from './PortfolioHeader'
import AnnualReturns from './AnnualReturns'
import StatisticsContainer from 'components/statisticsContainer'
import StatisticsBox from 'components/statisticsContainer/StatisticsBox'
import PortfolioLoader from 'components/Loading/PortfolioLoader'
import LoadingError from 'components/Error/LoadingError'
import PortfolioItem from './PortfolioItem'
import { PortfolioTable, PortfolioTableHead, LastUpdated, DateLabel } from './styles'

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
    const { serialChartsReady, pieChartsReady } = this.props

    return (
      <PlanContext.Consumer>
        {({ planName }) => (
          <Query query={PORTFOLIO_QUERY} variables={{ id: planIds[planName] }}>
            {({ loading, error, data }) => {
              if (loading) return <PortfolioLoader />
              if (error || !data || !data.Plan) return <LoadingError />
              const { Plan, DJIA } = data

              const lastRebalanceDate = Plan.portfolioYields[Plan.portfolioYields.length - 1].date

              return (
                <React.Fragment>
                  <PortfolioHeader
                    portfolioYields={Plan.portfolioYields}
                    marketPrices={DJIA.pricesSince2009}
                    portfolio={Plan.portfolio}
                    planName={Plan.name}
                    serialChartsReady={serialChartsReady}
                    pieChartsReady={pieChartsReady}
                  />
                  <AnnualReturns portfolioYields={Plan.portfolioYields} />
                  <PortfolioTable>
                    <PortfolioTableHead>
                      <TableRow>
                        <TableHeadCell className="name">Name</TableHeadCell>
                        <TableHeadCell className="allocation">Allocation</TableHeadCell>
                        <TableHeadCell className="return" tooltip="Percent increase from Cost basis to Last price.">
                          Return
                        </TableHeadCell>
                        <TableHeadCell
                          className="cost-basis"
                          tooltip="Averaged purchase price adjusted for dividends earned."
                        >
                          Cost basis
                        </TableHeadCell>
                        <TableHeadCell
                          className="last-price"
                          tooltip="Latest price available for stocks. Updated realtime or End of Day."
                        >
                          Last price
                        </TableHeadCell>
                        <TableHeadCell className="days-owned">Days owned</TableHeadCell>
                      </TableRow>
                    </PortfolioTableHead>
                    <TableBody>
                      {Plan.portfolio.map(stock => (
                        <PortfolioItem stock={stock} key={stock.ticker} serialChartsReady={serialChartsReady} />
                      ))}
                    </TableBody>
                  </PortfolioTable>
                  <StatisticsContainer>
                    <StatisticsBox title="Annual growth" value={`${Plan.statistics.CAGR}%`} icon="chart-line" />
                    <StatisticsBox
                      title="Sold with profit"
                      value={`${Plan.statistics.winRatio.toFixed(2)}%`}
                      icon="chart-pie"
                    />
                    <StatisticsBox title="Holdings" value={Plan.portfolio.length} icon="list-ul" />
                    <StatisticsBox
                      title="Percent in cash"
                      value={`${Plan.launchStatistics.percentInCash.toFixed(2)}%`}
                      icon="dollar-sign"
                    />
                  </StatisticsContainer>
                  <LastUpdated>
                    Last rebalanced:{' '}
                    <DateLabel>
                      {fecha.format(
                        new Date(lastRebalanceDate.year, lastRebalanceDate.month, lastRebalanceDate.day),
                        'MMM D, YYYY'
                      )}
                    </DateLabel>
                  </LastUpdated>
                </React.Fragment>
              )
            }}
          </Query>
        )}
      </PlanContext.Consumer>
    )
  }
}

export default withDashboard(withCharts(Portfolio, { loadPieChart: true }))
