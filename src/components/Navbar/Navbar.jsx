import React, { Component } from 'react'
import PropTypes from 'prop-types'
import gql from "graphql-tag"
import { Query } from "react-apollo"
import { Router } from 'react-router-dom'
import { hasStorage } from 'common/utils/featureTests'

// UI
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
import Logo from './logo_horizontal.svg'

import { NavLinks } from './styles'

const LOGGED_IN_USER_QUERY = gql`
  query LoggedInUserQuery {
    loggedInUser {
      id
    }
  }
`

class Navbar extends Component {
    state = { loggedIn: (hasStorage && localStorage.getItem('graphcoolToken')) }

    logout = () => {
        if (hasStorage) localStorage.removeItem('graphcoolToken')
        this.setState({ loggedIn: false })
    }

    renderLoggedOutLinks = () => (
        <NavLinks>
            <Button color="primary" onClick={() => {}}>Login</Button>
            <Button color="primary" onClick={() => {}}>Sign up</Button>
        </NavLinks>
    )

    renderLoggedInLinks = () => (
        <NavLinks>
            <Button color="primary" onClick={() => Router.push('/dashboard/portfolio')}>
                Dashboard
            </Button>
            <Button color="primary" onClick={() => this.logout()}>Log out</Button>
        </NavLinks>
    )

    render() {
        const { loggedIn } = this.state

        return (
            <Query query={LOGGED_IN_USER_QUERY}>
                {({ loading, error, data }) => (
                    <AppBar position="fixed" color="default">
                        <Toolbar>
                        <Logo />
                        {(loggedIn)
                            ? this.renderLoggedInLinks()
                            : this.renderLoggedOutLinks()}
                        </Toolbar>
                    </AppBar>
                )}
            </Query>
            
        )
    }
}

Navbar.propTypes = {
    actions: PropTypes.object,
}

export default Navbar