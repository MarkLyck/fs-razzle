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
import PerformanceMatters from './05_PerformanceMatters'
import FirstMonthOnus from './06_FirstMonthOnus'
import WhatToExpect from './07_WhatToExpect'
import PilotProgram from './08_PilotProgram'
import LongTermPerformance from './09_LongTermPerformance'
import Statistics from './10_Statistics'
import HowWeBeatTheMarket from './11_HowWeBeatTheMarket'
import RiskManagement from './12_RiskManagement'
import CorporateProfile from './13_CorporateProfile'
import IntendedAudience from './14_IntendedAudience'
import ScrolledToBottom from './15_ScrolledToBottom'
import Footer from './16_Footer'

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
        const DJIA = data ? data.DJIA : mockData.DJIA
        const SP500 = data ? data.SP500 : mockData.SP500

        const planName = _.get(plan, 'name')
        const portfolioReturn = _.get(plan, 'launchStatistics.total_return')
        const portfolioYields = _.get(plan, 'portfolioYields')
        const backtestedData = _.get(plan, 'backtestedData')
        const latestSells = _.get(plan, 'latestSells')
        const winRatio = _.get(plan, 'statistics.winRatio')
        const avgGain = _.get(plan, 'info.avgGainPerPosition')
        const avgLoss = _.get(plan, 'info.avgLossPerPosition')

        return (
            <div className="retail-page">
                <Navbar />
                <Hero portfolioReturn={portfolioReturn} winRatio={winRatio} />
                <Introduction portfolioReturn={portfolioReturn} winRatio={winRatio} planName={planName} />
                <WhatIsIt />
                <Performance portfolioYields={portfolioYields} marketPrices={DJIA.pricesSince2009} planName={planName} />
                <PerformanceMatters />
                <FirstMonthOnus />
                <WhatToExpect latestSells={latestSells} />
                <PilotProgram />
                <LongTermPerformance backtestedData={backtestedData} marketPrices={SP500.longtermPrices} planName={planName} />
                <Statistics winRatio={winRatio} planName={planName} avgGain={avgGain} avgLoss={avgLoss} />
                <HowWeBeatTheMarket />
                <RiskManagement />
                <CorporateProfile />
                <IntendedAudience />
                <ScrolledToBottom />
                <Footer />
            </div>
        )
    }}
    </Query>
)

export default Retail