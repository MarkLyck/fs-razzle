import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { TableCell } from 'components/Table'
import PortfolioItemGraph from './PortfolioItemGraph'
import { ItemRow } from './styles'

const STOCK_QUERY = gql`
  query stocks($ticker: String!) {
    allStocks(filter: { ticker: $ticker }) {
      ticker
      historicPrices
    }
  }
`

const numberToFirstDecimal = number => {
  if (number >= 0.01) return number.toFixed(2)
  const decimals = String(number)
    .split('.')[1]
    .split('')
    .map(num => Number(num))
  let foundFistNon0 = false
  let firstNon0Index = 2
  let lastDigit = 0
  decimals.forEach((digit, index) => {
    if (!foundFistNon0 && lastDigit === 0 && digit !== 0) {
      foundFistNon0 = true
      firstNon0Index = index
    }
    lastDigit = digit
  })

  return number.toFixed(firstNon0Index + 1)
}

class PortfolioItem extends Component {
  state = {
    expanded: false,
  }

  toggleExpanded = () => this.setState({ expanded: !this.state.expanded })

  render() {
    const { stock, serialChartsReady } = this.props
    const { expanded } = this.state

    const costBasisPrice = stock.purchase_price - stock.dividends
    const percentIncrease = (((stock.latest_price - costBasisPrice) * 100) / costBasisPrice).toFixed(2)
    const increasePrefix = percentIncrease > 0 ? '+' : ''
    const latestPrice = stock.latest_price ? `$${stock.latest_price.toFixed(2)}` : ''
    const allocation = numberToFirstDecimal(stock.percentage_weight)

    return (
      <React.Fragment>
        <ItemRow hover onClick={this.toggleExpanded}>
          <TableCell className="name">
            <h4 className="stock-name">{stock.name}</h4>
            {stock.ticker !== 'CASH' && <p className="ticker">{stock.ticker}</p>}
          </TableCell>
          <TableCell className="allocation">{allocation}%</TableCell>
          <TableCell className={`return ${percentIncrease >= 0 ? 'positive' : 'negative'}`}>
            {isNaN(percentIncrease) ? '' : `${increasePrefix}${percentIncrease}%`}
          </TableCell>
          <TableCell className="cost-basis">{costBasisPrice ? `$${costBasisPrice.toFixed(2)}` : ''}</TableCell>
          <TableCell className="last-price">{latestPrice}</TableCell>
          <TableCell className="days-owned">{stock.days_owned}</TableCell>
        </ItemRow>
        {stock.ticker !== 'CASH' &&
          expanded && (
            <Query query={STOCK_QUERY} variables={{ ticker: stock.ticker }}>
              {({ loading, error, data }) => {
                let historicPrices = []

                if (data.allStocks && data.allStocks[0] && data.allStocks[0].historicPrices) {
                  historicPrices = data.allStocks[0].historicPrices
                }

                return (
                  <ItemRow>
                    <td className="stock-graph-cell" colSpan="6">
                      <PortfolioItemGraph
                        historicPrices={historicPrices}
                        serialChartsReady={serialChartsReady}
                        loading={loading}
                        error={error}
                        ticker={stock.ticker}
                        costBasisPrice={costBasisPrice}
                      />
                    </td>
                  </ItemRow>
                )
              }}
            </Query>
          )}
      </React.Fragment>
    )
  }
}

export default PortfolioItem
