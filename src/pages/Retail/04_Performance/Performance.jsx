import React from 'react'
import PropTypes from 'prop-types'
import Section from 'components/Section'
import SectionTitle from 'components/Section/SectionTitle'
import Subtitle from 'components/Section/Subtitle'
import LaunchPerformance from './LaunchPerformance'

const Performance = ({ portfolioYields, marketPrices, planName, amChartsLoaded }) => (
  <Section>
    <SectionTitle>Performance</SectionTitle>
    <Subtitle>Unleveraged returns since 2009, compared to the Dow Jones Industrial Average.</Subtitle>
    <LaunchPerformance
      portfolioYields={portfolioYields}
      marketPrices={marketPrices}
      planName={planName}
      amChartsLoaded={amChartsLoaded}
    />
  </Section>
)

Performance.propTypes = {
  portfolioYields: PropTypes.array,
  marketPrices: PropTypes.array,
  planName: PropTypes.string,
}

export default Performance
