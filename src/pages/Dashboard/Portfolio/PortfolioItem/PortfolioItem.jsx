import React, { Component } from 'react'
import { TableRow, TableCell } from 'components/Table'

class PortfolioItem extends Component {
    render() {
        const { stock } = this.props

        const costBasisPrice = stock.purchase_price - stock.dividends
        const percentIncrease = (((stock.latest_price - costBasisPrice) * 100) / costBasisPrice).toFixed(2)
        const increasePrefix = percentIncrease > 0 ? '+' : ''
        const latestPrice = stock.latest_price ? `$${stock.latest_price.toFixed(2)}` : ''

        return (
            <TableRow>
                <TableCell className="stock-name">
                    <h4 className="name">{stock.name}</h4>
                    {stock.ticker !== 'CASH' && <p className="ticker">{stock.ticker}</p>}
                </TableCell>
                <TableCell>{stock.percentage_weight.toFixed(2)}%</TableCell>
                <TableCell className={`return ${percentIncrease > 0 ? 'positive' : 'negative'}`}>
                    {isNaN(percentIncrease) ? '' : `${increasePrefix}${percentIncrease}%`}
                </TableCell>
                <TableCell>{costBasisPrice ? `$${costBasisPrice.toFixed(2)}` : ''}</TableCell>
                <TableCell>{latestPrice}</TableCell>
                <TableCell>{stock.days_owned}</TableCell>
            </TableRow>
        )
    }
}

export default PortfolioItem