import React, { Component } from 'react'
import { TableCell } from 'components/Table'
import { ItemRow } from './styles'

class PortfolioItem extends Component {
    render() {
        const { stock } = this.props

        const costBasisPrice = stock.purchase_price - stock.dividends
        const percentIncrease = (((stock.latest_price - costBasisPrice) * 100) / costBasisPrice).toFixed(2)
        const increasePrefix = percentIncrease > 0 ? '+' : ''
        const latestPrice = stock.latest_price ? `$${stock.latest_price.toFixed(2)}` : ''

        return (
            <ItemRow>
                <TableCell className="name">
                    <h4 className="name">{stock.name}</h4>
                    {stock.ticker !== 'CASH' && <p className="ticker">{stock.ticker}</p>}
                </TableCell>
                <TableCell className="allocation">{stock.percentage_weight.toFixed(2)}%</TableCell>
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