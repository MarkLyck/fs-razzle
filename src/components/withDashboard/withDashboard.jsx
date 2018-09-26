import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { hasStorage } from 'common/utils/featureTests'
import PlanContext from 'common/Contexts/PlanContext'
import SideMenu from 'components/SideMenu'
import NavBar from 'components/Navbar/Dashboard'
import { DashboardLayout, DashboardContent } from './styles'

const GET_LOGGED_IN_USER = gql`
  query {
    loggedInUser {
      id
      type
      plan
    }
  }
`

const withDashboard = WrappedComponent => {
  class WithDashboard extends Component {
    constructor(props) {
      super(props)
      // if they have no token saved. Push them to the front page immediately.
      if (hasStorage && !localStorage.getItem('graphcoolToken')) {
        props.history.push('/')
      }
    }

    state = {
      planName:
        hasStorage && localStorage.getItem('selectedPlan')
          ? localStorage.getItem('selectedPlan').toUpperCase()
          : 'ENTRY',
    }

    componentDidMount() {
      window.Intercom('shutdown')
    }

    setPlan = planName => {
      if (hasStorage) localStorage.setItem('selectedPlan', planName)
      this.setState({ planName })
    }

    getContext = () => ({
      planName: this.state.planName,
      setPlan: this.setPlan,
    })

    render() {
      const { history, location } = this.props
      return (
        <Query query={GET_LOGGED_IN_USER}>
          {({ loading, error, data, refetch }) => {
            if (data && data.loggedInUser && data.loggedInUser.id === null) {
              // if the token they have is incorrect or expired. Push them to the front page.
              history.push('/')
            }

            let userType,
              userPlan = ''
            if (data && data.loggedInUser) {
              userType = data.loggedInUser.type
              userPlan = data.loggedInUser.plan
              if (hasStorage && !localStorage.getItem('selectedPlan')) {
                this.setPlan(data.loggedInUser.plan)
              }
            }

            return (
              <DashboardLayout>
                <SideMenu history={history} location={location} userType={userType} />
                <PlanContext.Provider value={this.getContext()}>
                  <DashboardContent>
                    <NavBar history={history} location={location} />
                    <WrappedComponent location={location} userType={userType} history={history} userPlan={userPlan} />
                  </DashboardContent>
                </PlanContext.Provider>
              </DashboardLayout>
            )
          }}
        </Query>
      )
    }
  }

  return WithDashboard
}

export default withDashboard
