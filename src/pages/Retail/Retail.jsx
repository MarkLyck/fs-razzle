import React, { Component } from 'react'
import _ from 'lodash'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Script from 'react-load-script'
import { planIds, marketIds } from 'common/constants'
import { hasStorage, usingMocks } from 'common/utils/featureTests'
import mockData from 'common/mocks/RetailData.json'
import HomeLoader from 'components/Loading/HomeLoader'
import LoadingError from 'components/Error/LoadingError'
import Navbar from 'components/Navbar/Retail'
import Hero from './01_Hero'
import Introduction from './02_Introduction'
import WhatIsIt from './03_WhatIsIt'
import Performance from './04_Performance'
import PerformanceMatters from './05_PerformanceMatters'
import FirstMonthOnUs from './06_FirstMonthOnUs'
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

// import History from './History'

// const ARTICLES_QUERY = gql`
//   query {
//     allArticles {
//         title
//         body
//         headerImageUrl
//     }
//   }
// `

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

class Retail extends Component {
  state = {
    amChartsCoreStatus: false,
    amChartsLoaded: false,
    amChartsLoadingError: false,
  }

  amChartsSerialStatus = false
  amChartsThemeStatus = false

  componentDidMount() {
    hasStorage && localStorage.setItem('selectedPlan', 'ENTRY')
  }

  areAllChartDependenciesLoaded = () => {
    if (this.state.amChartsCoreStatus && this.amChartsSerialStatus && this.amChartsThemeStatus) {
      this.setState({ amChartsLoaded: true })
    }
  }

  onLoadAmChartsCore = () => {
    this.setState({ amChartsCoreStatus: true })
    this.areAllChartDependenciesLoaded()
  }
  onLoadAmChartsSerial = () => {
    this.amChartsSerialStatus = true
    this.areAllChartDependenciesLoaded()
  }
  onLoadAmChartsTheme = () => {
    this.amChartsThemeStatus = true
    this.areAllChartDependenciesLoaded()
  }

  render() {
    const { history } = this.props
    const { amChartsLoaded, amChartsCoreStatus } = this.state

    return (
      <Query query={GET_ENTRY_AND_MARKET_DATA}>
        {({ loading, error, data }) => {
          console.log('usingMocks', usingMocks)
          if (loading) return <HomeLoader />
          if (error && !usingMocks) return <LoadingError />

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
              <Navbar history={history} />
              <Hero portfolioReturn={portfolioReturn} winRatio={winRatio} />
              <Introduction
                portfolioReturn={portfolioReturn}
                portfolioYields={portfolioYields}
                winRatio={winRatio}
                planName={planName}
              />
              <WhatIsIt />
              <Performance
                portfolioYields={portfolioYields}
                marketPrices={DJIA.pricesSince2009}
                planName={planName}
                amChartsLoaded={amChartsLoaded}
              />
              <PerformanceMatters />
              <FirstMonthOnUs />
              <WhatToExpect latestSells={latestSells} />
              <PilotProgram />
              <LongTermPerformance
                backtestedData={backtestedData}
                marketPrices={SP500.longtermPrices}
                planName={planName}
                amChartsLoaded={amChartsLoaded}
              />
              <Statistics winRatio={winRatio} planName={planName} avgGain={avgGain} avgLoss={avgLoss} />
              <HowWeBeatTheMarket />
              <RiskManagement />
              <CorporateProfile />
              <IntendedAudience />
              <ScrolledToBottom />
              <Footer />

              <Script url="https://www.amcharts.com/lib/3/amcharts.js" onLoad={this.onLoadAmChartsCore} />
              <Script url="https://js.stripe.com/v3/" />
              {amChartsCoreStatus ? (
                <React.Fragment>
                  <Script url="https://www.amcharts.com/lib/3/serial.js" onLoad={this.onLoadAmChartsSerial} />
                  <Script url="https://www.amcharts.com/lib/3/themes/light.js" onLoad={this.onLoadAmChartsTheme} />
                </React.Fragment>
              ) : null}
            </div>
          )
        }}
      </Query>
    )
  }
}
export default Retail
