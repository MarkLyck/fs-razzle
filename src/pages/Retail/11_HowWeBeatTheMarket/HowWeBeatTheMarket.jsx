import React from 'react'
import Paper from 'material-ui/Paper'
import Table, { TableBody, TableCell, TableRow } from 'material-ui/Table'
import Section from 'components/Section'
import SectionTitle from 'components/Section/SectionTitle'

/* eslint-disable max-len */

const HowWeBeatTheMarket = () => (
    <Section data-offwhite>
        <SectionTitle>How we beat the market</SectionTitle>
        <p>
            Formula Stocks uses a combination of many specific technologies developed over a 14- year period to do as Mark Twain
            originally suggested:<br /><br />

            ”Buy good quality common stocks that go up. If they do not go up, do not buy them”. While Twain said this tongue-in-cheek,
            it encapsulates what Formula Stocks strives to do.<br /><br />

            We identify stocks that go up, before they go up, with a 89-92% probability of being correct. Some of the techniques
            employed include in no specific order:
        </p>
        <Paper style={{ width: '100%' }}>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell><p>Cognitive computing – the capability to learn from experience, and reason based upon it.</p></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><p>Business analytics – the capability to analyze business models.</p></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><p>Margin of safety principles – the concept of preferring extra safety before investing.</p></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><p>Valuation technology – the concept of calculating the intrinsic value of a business.</p></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><p>The scientific method – the method based upon which a thesis can be formed, tested, and refined.</p></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><p>Quantitative measurements – a method with which to quantify a theory.</p></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><p>Growth projection – a method with which to project the future growth of a business.</p></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><p>Intelligent Investment Technologies – 93 different methods for outperforming the market.</p></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><p>Alpha prediction – a method which estimates the future return from a stock.</p></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><p>Position-sizing logic – the concept of matching position size and odds.</p></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><p>Portfolio management technology – software for optimizing risk/reward characteristics of a portfolio.</p></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell><p>Statistics – a branch of mathematics that deals with interpretation of data.</p></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
        <p>
            The complexity is high. Formula Stocks offers a leading-edge technological approach to stock selection and portfolio
            optimization. If you want to know more, please request our brochure or click here.
        </p>
    </Section>
)

export default HowWeBeatTheMarket
