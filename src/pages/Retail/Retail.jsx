import React from 'react'
import _ from 'lodash'
import { Query } from "react-apollo"
import gql from "graphql-tag"
import { planIds, marketIds } from 'common/constants'
import { usingMocks } from 'common/utils/featureTests'
import mockData from 'common/mocks/RetailData.json'

import Navbar from 'components/Navbar'
import Hero from './Hero'
import Introduction from './Introduction'

const GET_ENTRY_AND_MARKET_DATA = gql`
  query {
    Plan(id: "${planIds.ENTRY}") {
      name
      backtestedData
      info
      price
      portfolioYields
      launchStatistics
      latestSells
      statistics
    },
    SP500: Market(id: "${marketIds.SP500}") {
        name
        pricesSince2009
        longtermPrices
    }
    DJIA: Market(id: "${marketIds.DJIA}") {
        name
        pricesSince2009
    }
  }
`

const Retail = () => (
    <Query query={GET_ENTRY_AND_MARKET_DATA}>
    {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>
        if (error && !usingMocks) return <p>Error loading</p>

        const plan = data ? data.Plan : mockData.Plan

        const planName = _.get(plan, 'name')
        const portfolioReturn = _.get(plan, 'launchStatistics.total_return')
        const winRatio = _.get(plan, 'statistics.winRatio')
        const avgGain = _.get(plan, 'info.avgGainPerPosition')
        const avgLoss = _.get(plan, 'info.avgLossPerPosition')

        return (
            <div className="retail-page">
                <Navbar />
                <Hero portfolioReturn={portfolioReturn} winRatio={winRatio} />
                <Introduction portfolioReturn={portfolioReturn} winRatio={winRatio} planName={planName} />
            </div>
        )
    }}
    </Query>
)

export default Retail

// <Introduction portfolioReturn={portfolioReturn} winRatio={winRatio} planName={Plan.name} />
// <WhatIsIt />
// <Performance portfolioYields={Plan.portfolioYields} marketPrices={DJIA.pricesSince2009} planName={Plan.name} />
// <PerformanceMatters />
// <FirstMonthOnus />
// <WhatToExpect latestSells={Plan.latestSells} />
// <PilotProgram />
// <BacktestedPerformance backtestedData={Plan.backtestedData} marketPrices={SP500.longtermPrices} planName={Plan.name} />
// <Statistics winRatio={winRatio} planName={Plan.name} avgGain={avgGain} avgLoss={avgLoss} />
// <HowWeBeatTheMarket />
// <RiskManagement />
// <CorporateProfile />
// <IntendedAudience />
// <ScrolledToBottom />
// <Footer />