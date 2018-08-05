import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gql from 'graphql-tag'
import { hasStorage } from 'common/utils/featureTests'

// UI
import Button from 'components/Button'
import Signup from 'components/Dialogs/Signup'
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
  state = {
    loggedIn: hasStorage && localStorage.getItem('graphcoolToken'),
    showSignUpModal: false,
    showLoginModal: false,
  }

  logout = () => {
    if (hasStorage) localStorage.removeItem('graphcoolToken')
    this.setState({ loggedIn: false })
  }

  toggleSignupModal = () => this.setState(state => ({ showSignUpModal: !state.showSignUpModal }))
  toggleLoginModal = () => this.setState(state => ({ showLoginModal: !state.showSignUpModal }))

  renderLoggedOutLinks = () => (
    <NavLinks>
      <Button variant="raised" type="light" onClick={this.toggleLoginModal}>
        <FontAwesomeIcon icon="sign-in-alt" />Login
      </Button>
      <Button variant="raised" background="primary" onClick={this.toggleSignupModal}>
        Sign up
      </Button>
    </NavLinks>
  )

  renderLoggedInLinks = () => (
    <NavLinks>
      <Button variant="raised" onClick={() => {}}>
        <FontAwesomeIcon icon="chart-line" />Dashboard
      </Button>
      <Button variant="raised" type="light" color="black" hoverColor="error" onClick={() => this.logout()}>
        <FontAwesomeIcon icon="sign-out-alt" />Log out
      </Button>
    </NavLinks>
  )

  render() {
    const { history } = this.props
    const { loggedIn, showSignUpModal, showLoginModal } = this.state

    return (
      <Query query={LOGGED_IN_USER_QUERY}>
        {({ loading, error, data }) => {
          /* console.log('loading', loading)
          console.log('error', error)
          console.log('data', data) */

          return (
            <NavBar position="fixed" color="default">
              <span
                dangerouslySetInnerHTML={{
                  __html: Logo,
                }}
              />
              {loggedIn ? this.renderLoggedInLinks() : this.renderLoggedOutLinks()}
              {showSignUpModal && <Signup history={history} onRequestClose={this.toggleSignupModal} />}
              {showLoginModal && <div />}
            </NavBar>
          )
        }}
      </Query>
    )
  }
}

Navbar.propTypes = {
  actions: PropTypes.object,
}

export default Navbar
