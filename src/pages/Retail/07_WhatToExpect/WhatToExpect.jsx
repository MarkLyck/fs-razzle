import React from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import Section from 'components/Section'
import SectionTitle from 'components/Section/SectionTitle'
import Beside from 'components/Section/Beside'
import Left from 'components/Section/Beside/Left'
import Right from 'components/Section/Beside/Right'
import { Screenshot } from './styles'

const WhatToExpect = ({ latestSells }) => (
    <Section data-offwhite>
        <SectionTitle>What to expect</SectionTitle>
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
        <p>
            If you choose to use Formula Stocks consistently, diversified, and for a number of years, odds are
            extremely good that you will obtain better returns than offered by most investment methods.<br /><br />

            Here are the latest 10 sales performed by the Entry product
        </p>
        <Paper style={{ width: '100%' }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell numeric>Bought at</TableCell>
                        <TableCell numeric>Sold at</TableCell>
                        <TableCell numeric>Return</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {latestSells.map((sell, i) => (
                        <TableRow key={sell.name + i}>
                            <TableCell>{sell.name}</TableCell>
                            <TableCell numeric>{sell.originalPrice.toFixed(2)}</TableCell>
                            <TableCell numeric>{sell.sellPrice.toFixed(2)}</TableCell>
                            <TableCell numeric>
                                {(((sell.sellPrice - sell.originalPrice) * 100) / sell.originalPrice).toFixed(2)}%
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    </Section>
)

WhatToExpect.defaultProps = {
    latestSells: [],
}

WhatToExpect.propTypes = {
    latestSells: PropTypes.array.isRequired,
}

export default WhatToExpect
