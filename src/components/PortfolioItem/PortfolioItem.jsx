import React, { Component } from 'react'
import { TableRow, TableCell } from 'components/Table'

class PortfolioItem extends Component {
    render() {
        const { stock } = this.props

        const costBasisPrice = stock.purchase_price - stock.dividends
        const percentIncrease = (((stock.latest_price - costBasisPrice) * 100) / costBasisPrice).toFixed(2)
        console.log(stock)
        return (
            <TableRow>
                <TableCell>{stock.name}</TableCell>
                <TableCell>{stock.percentage_weight}%</TableCell>
                <TableCell>{percentIncrease}%</TableCell>
                <TableCell>${costBasisPrice.toFixed(2)}</TableCell>
                <TableCell>${stock.latest_price}</TableCell>
                <TableCell>{stock.days_owned}</TableCell>
            </TableRow>
        )
    }
}

export default PortfolioItem