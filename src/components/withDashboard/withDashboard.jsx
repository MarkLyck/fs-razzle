import React, { Component } from 'react'
// import { Query } from "react-apollo"
// import gql from "graphql-tag"
import { hasStorage } from 'common/utils/featureTests'
import PlanContext from 'common/Contexts/PlanContext'
import SideMenu from 'components/SideMenu'
import NavBar from 'components/Navbar/Dashboard'
import { DashboardLayout, DashboardContent } from './styles'

// options: { fetchPolicy: 'network-only' },
// const LOGGED_IN_USER_QUERY = gql`
//   query LoggedInUser {
//     loggedInUser {
//       id
//     }
//   }
// `

const withDashboard = WrappedComponent => {
  class WithDashboard extends Component {
    state = {
      planName:
        hasStorage && localStorage.getItem('selectedPlan')
          ? localStorage.getItem('selectedPlan').toUpperCase()
          : 'ENTRY',
    }

    setPlan = planName => this.setState({ planName })

    getContext = () => ({
      planName: this.state.planName,
      setPlan: this.setPlan,
    })

    render() {
      const { history, location } = this.props
      return (
        <DashboardLayout>
          <SideMenu history={history} location={location} />
          <PlanContext.Provider value={this.getContext()}>
            <DashboardContent>
              <NavBar history={history} location={location} />
              <WrappedComponent location={location} />
            </DashboardContent>
          </PlanContext.Provider>
        </DashboardLayout>
      )
    }
  }

  return WithDashboard
}

export default withDashboard
