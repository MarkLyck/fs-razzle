import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'emotion-theming'
import Section from 'components/Section'
import SectionTitle from 'components/Section/SectionTitle'
import Beside from 'components/Section/Beside'
import Left from 'components/Section/Beside/Left'
import Right from 'components/Section/Beside/Right'
import { BesideContainer, Screenshot, Table, TableBody, TableRow, TableCell, TableHeadCell, StockName } from './styles'

const WhatToExpect = ({ latestSells }) => (
    <Section data-offwhite>
        <SectionTitle>What to expect</SectionTitle>
        <BesideContainer>
            <Beside>
                <Left>
                    <p>
                        Our recommendations are long term, the average holding period is 2.24 years. When you
                        first buy a stock, the immediate price changes may well be random in the very short term. But over
                        time the price will gradually come to reflect the value of the better choices we make.<br /><br />

                        Our Entry product has picked successful investments 90% of the time. This compares to 59% for
                        stocks generally.<br /><br />

                        The mathematical expectation from a Formula Stock's selection is very well defined, and has
                        above-average odds of success, higher than normal return characteristics, and a lower than average
                        risk. This has been fully reflected in our actual results.
                    </p>
                </Left>
                <Right>
                    <Screenshot src="media/images/screenshots/Portfolio.jpg" alt="" />
                </Right>
            </Beside>
        </BesideContainer>
        <p>
            If you choose to use Formula Stocks consistently, diversified, and for a number of years, odds are
            extremely good that you will obtain better returns than offered by most investment methods.<br /><br />

            Here are the latest 10 sales performed by the Entry product
        </p>
        <Table>
            <thead>
                <TableRow>
                    <TableHeadCell>Name</TableHeadCell>
                    <TableHeadCell className="purchase-price-header" numeric>Bought at</TableHeadCell>
                    <TableHeadCell className="sales-price-header" numeric>Sold at</TableHeadCell>
                    <TableHeadCell numeric>Return</TableHeadCell>
                </TableRow>
            </thead>
            <TableBody>
                {latestSells.map((sell, i) => {
                    const percentReturn = (((sell.sellPrice - sell.originalPrice) * 100) / sell.originalPrice).toFixed(2)
                    return (
                        <TableRow key={sell.name + i}>
                            <TableCell className="stock-name"><StockName>{sell.name}</StockName> ({sell.ticker})</TableCell>
                            <TableCell className="purchase-price" numeric>${sell.originalPrice.toFixed(2)}</TableCell>
                            <TableCell className="sales-price" numeric>${sell.sellPrice.toFixed(2)}</TableCell>
                            <TableCell className={`percent-return ${percentReturn > 0 ? 'positive' : 'negative'}`} numeric>
                                {percentReturn}%
                            </TableCell>
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    </Section>
)

WhatToExpect.defaultProps = {
    latestSells: [],
}

WhatToExpect.propTypes = {
    latestSells: PropTypes.array.isRequired,
}

export default withTheme(WhatToExpect)
