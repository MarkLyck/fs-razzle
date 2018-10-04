import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'emotion-theming'
import Section from 'components/Section'
import SectionTitle from 'components/Section/SectionTitle'
import Beside from 'components/Section/Beside'
import Left from 'components/Section/Beside/Left'
import Right from 'components/Section/Beside/Right'
import { BesideContainer, Screenshot, Table, TableBody, TableRow, TableCell, TableHeadCell, StockName } from './styles'

const removeDupes = list => {
  let names = {}

  const newList = list.reduce((acc, curr) => {
    if (!names[curr.ticker]) {
      names[curr.ticker] = true
      acc.push(curr)
    }
    return acc
  }, [])

  return newList
}

const WhatToExpect = ({ latestSells, winRatio }) => (
  <Section data-offwhite>
    <SectionTitle>What to expect</SectionTitle>
    <BesideContainer>
      <Beside>
        <Left>
          <p>
            When you first buy a stock, already within 30 days, 62.16% of our recommendations statistically see a price
            increase. Your mileage may vary and depend upon current market conditions.
            <br />
            <br />A typical holding period is 2 years during which price, on average, gradually come to reflect the
            business prospects we have projected. After which statistically 90% will have seen a price increase.
            <br />
            <br />
            Our win-ratio of {Math.floor(winRatio)}% compares favorably to 59% for a typical basket of stocks.
          </p>
        </Left>
        <Right>
          <Screenshot src="media/images/screenshots/portfolio.png" alt="" />
        </Right>
      </Beside>
    </BesideContainer>
    <p>
      Using Formula Stocks gives you an edge. Use it consistently, diversified, for years: Odds accumulate in your
      favour, and you will likely outperform most competing investment methods.
      <br />
      <br />
      Latest portfolio sales:
    </p>
    <Table>
      <thead>
        <TableRow>
          <TableHeadCell>Name</TableHeadCell>
          <TableHeadCell className="purchase-price-header" numeric>
            Bought at
          </TableHeadCell>
          <TableHeadCell className="sales-price-header" numeric>
            Sold at
          </TableHeadCell>
          <TableHeadCell numeric>Return</TableHeadCell>
        </TableRow>
      </thead>
      <TableBody>
        {removeDupes(latestSells).map((sell, i) => {
          const percentReturn = (((sell.sellPrice - sell.originalPrice) * 100) / sell.originalPrice).toFixed(2)
          return (
            <TableRow key={sell.name + i}>
              <TableCell className="stock-name">
                <StockName>{sell.name}</StockName> ({sell.ticker})
              </TableCell>
              <TableCell className="purchase-price" numeric>
                ${sell.originalPrice.toFixed(2)}
              </TableCell>
              <TableCell className="sales-price" numeric>
                ${sell.sellPrice.toFixed(2)}
              </TableCell>
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
