import React, { Component } from 'react'
import _ from 'lodash'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Script from 'react-load-script'
import { planIds } from 'common/constants'
import { hasStorage, usingMocks } from 'common/utils/featureTests'
// import mockData from 'common/mocks/RetailData.json'
import HomeLoader from 'components/Loading/HomeLoader'
import LoadingError from 'components/Error/LoadingError'
import Navbar from 'components/Navbar/Retail'
import Signup from 'components/Dialogs/Signup'
import Login from 'components/Dialogs/Login'
import FAQ from 'components/Dialogs/FAQ'
import Hero from './01_Hero'
import Introduction from './02_Introduction'
import WhatIsIt from './03_WhatIsIt'
import Performance from './04_Performance'
import PercentMatters from './05_PercentMatters'
import FirstMonthOnUs from './06_FirstMonthOnUs'
import WhatToExpect from './07_WhatToExpect'
import PilotProgram from './08_PilotProgram'
import LongTermPerformance from './09_LongTermPerformance'
import Statistics from './10_Statistics'
import HowWeBeatTheMarket from './11_HowWeBeatTheMarket'
import RiskManagement from './12_RiskManagement'
import CorporateProfile from './13_CorporateProfile'
import ScrolledToBottom from './15_ScrolledToBottom'
import Footer from './16_Footer'

const GET_ENTRY_AND_MARKET_DATA = gql`
  query {
    Plan(id: "${planIds.ENTRY}") {
      name
      info
      price
      portfolioYields
      launchStatistics
      latestSells
      statistics
    }
  }
`

class Retail extends Component {
  state = {
    amChartsCoreStatus: false,
    amChartsLoaded: false,
    amChartsLoadingError: false,
    signUpVisible: false,
    loginVisible: false,
    FAQVisible: false,
  }

  amChartsSerialStatus = false
  amChartsThemeStatus = false

  componentDidMount() {
    window.Intercom('boot', { app_id: 'i194mpvo' })
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

  toggleSignUpModal = () => this.setState(state => ({ signUpVisible: !state.signUpVisible }))
  toggleLoginModal = () => this.setState(state => ({ loginVisible: !state.loginVisible }))
  toggleFAQModal = () => this.setState(state => ({ FAQVisible: !state.FAQVisible }))

  render() {
    const { history } = this.props
    const { amChartsLoaded, amChartsCoreStatus, signUpVisible, loginVisible, FAQVisible } = this.state

    return (
      <Query query={GET_ENTRY_AND_MARKET_DATA}>
        {({ loading, error, data }) => {
          if (loading) return <HomeLoader />
          if (!data || !data.Plan || (error && !usingMocks)) return <LoadingError />

          const { Plan } = data

          const planName = _.get(Plan, 'name')
          const portfolioReturn = _.get(Plan, 'launchStatistics.total_return')
          const portfolioYields = _.get(Plan, 'portfolioYields')
          const latestSells = _.get(Plan, 'latestSells')
          const winRatio = _.get(Plan, 'statistics.winRatio')
          const CAGR = _.get(Plan, 'statistics.CAGR')
          const avgGain = _.get(Plan, 'info.avgGainPerPosition')
          const avgLoss = _.get(Plan, 'info.avgLossPerPosition')
          const sortinoRatio = _.get(Plan, 'info.sortinoRatio')

          return (
            <div className="retail-page">
              <Navbar
                history={history}
                toggleSignUpModal={this.toggleSignUpModal}
                toggleLoginModal={this.toggleLoginModal}
                toggleFAQModal={this.toggleFAQModal}
              />
              <Hero portfolioReturn={portfolioReturn} winRatio={winRatio} />
              <Introduction
                portfolioReturn={portfolioReturn}
                portfolioYields={portfolioYields}
                winRatio={winRatio}
                planName={planName}
              />
              <WhatIsIt />
              <Performance portfolioYields={portfolioYields} planName={planName} amChartsLoaded={amChartsLoaded} />
              <PercentMatters portfolioReturn={portfolioReturn} CAGR={CAGR} />
              <FirstMonthOnUs toggleSignUpModal={this.toggleSignUpModal} />
              <WhatToExpect latestSells={latestSells} winRatio={winRatio} />
              <PilotProgram />
              <LongTermPerformance planName={planName} amChartsLoaded={amChartsLoaded} />
              <Statistics
                winRatio={winRatio}
                planName={planName}
                avgGain={avgGain}
                avgLoss={avgLoss}
                sortinoRatio={sortinoRatio}
              />
              <HowWeBeatTheMarket />
              <RiskManagement winRatio={winRatio} avgGain={avgGain} avgLoss={avgLoss} />
              <CorporateProfile />
              <ScrolledToBottom toggleSignUpModal={this.toggleSignUpModal} />
              <Footer />

              <Script url="https://www.amcharts.com/lib/3/amcharts.js" onLoad={this.onLoadAmChartsCore} />
              <Script url="https://js.stripe.com/v3/" />
              {amChartsCoreStatus ? (
                <React.Fragment>
                  <Script url="https://www.amcharts.com/lib/3/serial.js" onLoad={this.onLoadAmChartsSerial} />
                  <Script url="https://www.amcharts.com/lib/3/themes/light.js" onLoad={this.onLoadAmChartsTheme} />
                </React.Fragment>
              ) : null}
              {signUpVisible && (
                <Signup history={history} onRequestClose={this.toggleSignUpModal} planPrice={Plan.price} />
              )}
              {loginVisible && <Login history={history} onRequestClose={this.toggleLoginModal} />}
              {FAQVisible && <FAQ history={history} hide={this.toggleFAQModal} />}
            </div>
          )
        }}
      </Query>
    )
  }
}
export default Retail
