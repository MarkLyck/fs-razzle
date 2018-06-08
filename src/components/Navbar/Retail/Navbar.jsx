import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { withTheme } from 'emotion-theming'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { hasStorage } from 'common/utils/featureTests'

// UI
import Button from 'components/Button'
import Logo from './logo_horizontal.svg'

import { NavLinks, NavBar } from './styles'

const LOGGED_IN_USER_QUERY = gql`
  query LoggedInUserQuery {
    loggedInUser {
      id
    }
  }
`

class Navbar extends Component {
  state = { loggedIn: hasStorage && localStorage.getItem('graphcoolToken') }

  logout = () => {
    if (hasStorage) localStorage.removeItem('graphcoolToken')
    this.setState({ loggedIn: false })
  }

  renderLoggedOutLinks = () => (
    <NavLinks>
      <Button variant="raised" type="light" onClick={() => {}}>
        <FontAwesomeIcon icon="sign-in-alt" />Login
      </Button>
      <Button variant="raised" background="primary" onClick={() => {}}>
        Sign up
      </Button>
    </NavLinks>
  )

  renderLoggedInLinks = () => (
    <NavLinks>
      <Button variant="raised" onClick={() => {}}>
        <FontAwesomeIcon icon="chart-line" />Dashboard
      </Button>
      <Button
        variant="raised"
        type="light"
        color="black"
        hoverColor="error"
        onClick={() => this.logout()}
      >
        <FontAwesomeIcon icon="sign-out-alt" />Log out
      </Button>
    </NavLinks>
  )

  render() {
    const { loggedIn } = this.state

    return (
      <Query query={LOGGED_IN_USER_QUERY}>
        {({ loading, error, data }) => (
          <NavBar position="fixed" color="default">
            <Logo />
            {loggedIn
              ? this.renderLoggedInLinks()
              : this.renderLoggedOutLinks()}
          </NavBar>
        )}
      </Query>
    )
  }
}

Navbar.propTypes = {
  actions: PropTypes.object,
}

export default withTheme(Navbar)
