import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gql from 'graphql-tag'
import { hasStorage } from 'common/utils/featureTests'

// UI
import Button from 'components/Button'

import { NavLinks, NavBar, Logo } from './styles'

const LOGGED_IN_USER_QUERY = gql`
  query LoggedInUserQuery {
    loggedInUser {
      id
    }
  }
`

class Navbar extends Component {
  state = {
    loggedIn: hasStorage && localStorage.getItem('graphcoolToken'),
  }

  logout = () => {
    if (hasStorage) localStorage.removeItem('graphcoolToken')
    this.setState({ loggedIn: false })
  }

  renderLoggedOutLinks = () => (
    <NavLinks>
      <Button variant="raised" type="light" onClick={this.props.toggleLoginModal}>
        <FontAwesomeIcon icon="sign-in-alt" />Login
      </Button>
      <Button variant="raised" background="primary" onClick={this.props.toggleSignUpModal}>
        Sign up
      </Button>
    </NavLinks>
  )

  renderLoggedInLinks = history => (
    <NavLinks>
      <Button variant="raised" onClick={() => history.push('/dashboard/portfolio')}>
        <FontAwesomeIcon icon="chart-line" />Dashboard
      </Button>
      <Button variant="raised" type="light" color="black" hoverColor="error" onClick={() => this.logout()}>
        <FontAwesomeIcon icon="sign-out-alt" />Log out
      </Button>
    </NavLinks>
  )

  render() {
    const { history } = this.props
    const { loggedIn } = this.state

    return (
      <Query query={LOGGED_IN_USER_QUERY}>
        {({ loading, error, data }) => (
          <NavBar position="fixed" color="default">
            <Logo onClick={() => history.push('/')} />
            {loggedIn ? this.renderLoggedInLinks(history) : this.renderLoggedOutLinks()}
          </NavBar>
        )}
      </Query>
    )
  }
}

Navbar.propTypes = {
  actions: PropTypes.object,
}

export default Navbar
