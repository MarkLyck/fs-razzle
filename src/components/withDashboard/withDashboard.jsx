import React from 'react'
import PropTypes from 'prop-types'
import { Query } from "react-apollo"
import gql from "graphql-tag"
import SideMenu from 'components/SideMenu'
import NavBar from 'components/Navbar/Dashboard'
import { DashboardLayout, DashboardContent } from './styles'


// options: { fetchPolicy: 'network-only' },
const LOGGED_IN_USER_QUERY = gql`
  query LoggedInUser {
    loggedInUser {
      id
    }
  }
`

const withDashboard = (Component) => {
    const WithDashboard = props => (
        <DashboardLayout>
            <SideMenu history={props.history} location={props.location} />
            <DashboardContent>
                <NavBar history={props.history} location={props.location} />

                <Component />

            </DashboardContent>
        </DashboardLayout>
    )

    WithDashboard.propTypes = {
        children: PropTypes.node,
    }

    return WithDashboard
}

export default withDashboard