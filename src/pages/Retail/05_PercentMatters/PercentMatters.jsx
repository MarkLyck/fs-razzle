import React from 'react'
import Section from 'components/Section'
import SectionTitle from 'components/Section/SectionTitle'
import Comparison from './Comparison'

const PercentMatters = ({ portfolioReturn, CAGR }) => (
  <Section data-offwhite>
    <SectionTitle>Every percent matters</SectionTitle>
    <p>
      Assume that you would like to get an 18% yearly return. After all, who would not? Through the effects of
      compounding this would be much, much more rewarding than the standard 6% you normally expect from stocks. Example
      in a tax free account:
    </p>
    <Comparison />
    <p>
      18% in this example is 25 times better than 6%. Compounding is an exponential function, that makes time work for
      you.
      <br />
      <br />
      Certainty of any future rate of return is impossible, since the future has not happened yet. Looking back, our
      Entry product has produced <b>+{Math.floor(CAGR)}%</b> p.a. since inception in 2009. That amounts to{' '}
      <b>+{portfolioReturn.toFixed(2)}%</b> over a 9 year period, about 3x as much as the stock market indices in the
      same period.
    </p>
  </Section>
)

export default PercentMatters
