import React from 'react'
import theme from 'common/utils/theme'
import { Container, Bar, Dollars, MarketDollars } from './styles'

const Comparison = () => (
  <Container>
    <p>$1,000 invested with an 18% yearly return over 30 years.</p>
    <Bar color={theme.colors.primary} width={90}>
      <Dollars>$143,370</Dollars>
    </Bar>
    <p>$1,000 invested with a 6% yearly return over 30 years.</p>
    <Bar color={theme.colors.black} width={3.6}>
      <MarketDollars>$5,743</MarketDollars>
    </Bar>
  </Container>
)
export default Comparison
