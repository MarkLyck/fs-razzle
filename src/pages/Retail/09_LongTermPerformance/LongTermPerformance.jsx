import React from 'react'
import PropTypes from 'prop-types'
import Section from 'components/Section'
import SectionTitle from 'components/Section/SectionTitle'
import Subtitle from 'components/Section/Subtitle'
import Disclaimer from 'components/Legal/Disclaimer'
import LongTermGraph from './LongTermGraph'

const Performance = ({ backtestedData, marketPrices, planName, amChartsLoaded }) => (
  <Section data-offwhite>
    <SectionTitle>Long-term performance</SectionTitle>
    <Subtitle>Log scale graph 1970 - 2017. How $25,000 invested would have evolved over time</Subtitle>
    <LongTermGraph
      planData={backtestedData}
      marketPrices={marketPrices}
      planName={planName}
      amChartsLoaded={amChartsLoaded}
    />
    <Disclaimer>
      Historical numbers are based on backtested data. Since our 2009 launch we have observed similar results in real
      time. See our ToS for details.
    </Disclaimer>
  </Section>
)

Performance.propTypes = {
  backtestedData: PropTypes.array,
  marketPrices: PropTypes.array,
  planName: PropTypes.string,
}

export default Performance
