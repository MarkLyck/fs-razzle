import React from 'react'
import _ from 'lodash'
import { Query } from "react-apollo"
import gql from "graphql-tag"
import { planIds, marketIds } from 'common/constants'
import { usingMocks } from 'common/utils/featureTests'
import mockData from 'common/mocks/RetailData.json'
import HomeLoader from 'components/Loading/HomeLoader'

import Navbar from 'components/Navbar'
import Hero from './01_Hero'
import Introduction from './02_Introduction'
import WhatIsIt from './03_WhatIsIt'
import Performance from './04_Performance'

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
        if (loading) return <HomeLoader />
        if (error && !usingMocks) return <p>Error loading</p>

        const plan = data ? data.Plan : mockData.Plan

        console.log(plan)

        const planName = _.get(plan, 'name')
        const portfolioReturn = _.get(plan, 'launchStatistics.total_return')
        const portfolioYields = _.get(plan, 'portfolioYields')
        const winRatio = _.get(plan, 'statistics.winRatio')
        const avgGain = _.get(plan, 'info.avgGainPerPosition')
        const avgLoss = _.get(plan, 'info.avgLossPerPosition')

        return (
            <div className="retail-page">
                <Navbar />
                <Hero portfolioReturn={portfolioReturn} winRatio={winRatio} />
                <Introduction portfolioReturn={portfolioReturn} winRatio={winRatio} planName={planName} />
                <WhatIsIt />
                <Performance portfolioYields={portfolioYields} marketPrices={[]} planName={planName} />
            </div>
        )
    }}
    </Query>
)

export default Retail

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