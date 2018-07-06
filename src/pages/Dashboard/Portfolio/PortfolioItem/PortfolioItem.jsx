import React, { Component } from 'react'
import { TableCell } from 'components/Table'
import { ItemRow } from './styles'

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
  render() {
    const { stock } = this.props

    const costBasisPrice = stock.purchase_price - stock.dividends
    const percentIncrease = (((stock.latest_price - costBasisPrice) * 100) / costBasisPrice).toFixed(2)
    const increasePrefix = percentIncrease > 0 ? '+' : ''
    const latestPrice = stock.latest_price ? `$${stock.latest_price.toFixed(2)}` : ''
    const allocation = numberToFirstDecimal(stock.percentage_weight)

    return (
      <ItemRow>
        <TableCell className="name">
          <h4 className="name">{stock.name}</h4>
          {stock.ticker !== 'CASH' && <p className="ticker">{stock.ticker}</p>}
        </TableCell>
        <TableCell className="allocation">{allocation}%</TableCell>
        <TableCell className={`return ${percentIncrease > 0 ? 'positive' : 'negative'}`}>
          {isNaN(percentIncrease) ? '' : `${increasePrefix}${percentIncrease}%`}
        </TableCell>
        <TableCell className="cost-basis">{costBasisPrice ? `$${costBasisPrice.toFixed(2)}` : ''}</TableCell>
        <TableCell className="last-price">{latestPrice}</TableCell>
        <TableCell className="days-owned">{stock.days_owned}</TableCell>
      </ItemRow>
    )
  }
}

export default PortfolioItem
