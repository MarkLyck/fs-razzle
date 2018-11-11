import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import { planIds, marketIds } from 'common/constants'
import Section from 'components/Section'
import SectionTitle from 'components/Section/SectionTitle'
import Subtitle from 'components/Section/Subtitle'
import Disclaimer from 'components/Legal/Disclaimer'
import LongTermGraph from './LongTermGraph'

const GET_LONGTERM_DATA = gql`
  query {
    Plan(id: "${planIds.ENTRY}") {
      backtestedData
    },
    SP500: Market(id: "${marketIds.SP500}") {
        longtermPrices
    }
  }
`

const Performance = ({ backtestedData, marketPrices, planName, amChartsLoaded }) => (
  <Query query={GET_LONGTERM_DATA}>
    {({ loading, error, data = {} }) => {
      const { Plan = {}, SP500 = {} } = data
      return (
        <Section data-offwhite>
          <SectionTitle>Long-term performance</SectionTitle>
          <Subtitle>
            Log scale graph 1970 - {new Date().getFullYear()}. How $25,000 invested would have evolved over time
          </Subtitle>
          <LongTermGraph
            planData={Plan.backtestedData || []}
            marketPrices={SP500.longtermPrices || []}
            planName={planName}
            amChartsLoaded={amChartsLoaded}
          />
          <Disclaimer>
            Historical numbers are based on backtested data. Since our 2009 launch we have observed similar results in
            real time. See our ToS for details.
          </Disclaimer>
        </Section>
      )
    }}
  </Query>
)

Performance.propTypes = {
  backtestedData: PropTypes.array,
  marketPrices: PropTypes.array,
  planName: PropTypes.string,
}

export default Performance
