import React, { Component } from 'react'
import PropTypes from 'prop-types'
import platform from 'platform'
import Router from 'next/router'
import { gql, graphql, compose } from 'react-apollo'
import Dialog, { DialogTitle } from 'material-ui/Dialog'
import Slide from 'material-ui/transitions/Slide'
import { hasStorage } from 'common/featureTests'
import { getDeviceType } from 'common/helpers'
import AccountInfo from './AccountInfo'
import BillingInfo from './BillingInfo'

class SignUp extends Component {
    state = {
        accountInfo: {},
        page: 1,
        signupError: '',
    }

    stripe = undefined

    nextPage = accountInfo => this.setState({ page: this.state.page + 1, accountInfo })

    handleSignup = (name, { token }) => {
        const { createUser, signinUser } = this.props
        const { accountInfo } = this.state

        const type = 'trial'
        const location = (hasStorage && localStorage.getItem('location'))
            ? JSON.parse(localStorage.getItem('location')) : {}
        const plan = (hasStorage && localStorage.getItem('selectedPlan'))
            ? JSON.parse(localStorage.getItem('selectedPlan')) : 'entry'

        createUser({ variables: {
            email: accountInfo.email,
            password: accountInfo.password,
            cardToken: token.id,
            name,
            plan,
            type,
            location,
            address: {
                country: accountInfo.country,
                city: accountInfo.city,
                postalCode: accountInfo.postalCode,
                address: accountInfo.address,
            },
            device: {
                os: platform.os.family,
                product: platform.product,
                browser: platform.name,
                type: getDeviceType(),
            },
        } })
            .then((user) => {
                console.log('user', user)
                signinUser({ variables: {
                    email: accountInfo.email,
                    password: accountInfo.password,
                } })
                    .then((response) => {
                        if (hasStorage) {
                            localStorage.setItem('graphcoolToken', response.data.signinUser.token)
                        }
                        Router.push('/dashboard/portfolio')
                    })
            })
            .catch(e => this.setState({ signupError: String(e) }))
    }

    render() {
        if (typeof window === 'undefined') { return null }
        const { page, accountInfo, signupError } = this.state
        const { ...other } = this.props
        delete other.createUser
        delete other.signinUser

        const tax = (accountInfo && accountInfo.selectedCountry) ? accountInfo.selectedCountry.taxPercent : 0

        return (
            <Dialog {...other} transition={Slide}>
                <DialogTitle>Sign up</DialogTitle>
                { page === 1 && <AccountInfo nextPage={this.nextPage} /> }
                { page === 2 && <BillingInfo tax={tax} handleSignup={this.handleSignup} signupError={signupError} /> }
            </Dialog>
        )
    }
}

SignUp.propTypes = {
    onClose: PropTypes.func.isRequired,
    createUser: PropTypes.func,
    signinUser: PropTypes.func,
}

const createUser = gql`
  mutation (
      $email: String!,
      $password: String!,
      $name: String!,
      $type: String!,
      $cardToken: String!,
      $address: Json!,
      $location: Json!,
      $device: Json!
  ) {
    createUser(authProvider: {
        email: {
            email: $email,
            password: $password,
        }
    },
    name: $name,
    type: $type,
    cardToken: $cardToken,
    address: $address,
    location: $location,
    device: $device,
    ) {
        id
    }
  }
`
const SIGNIN_USER_MUTATION = gql`
  mutation SigninUserMutation($email: String!, $password: String!) {
    signinUser(
      email: {
        email: $email,
        password: $password
      }
    ) {
      token
    }
  }
`

export default compose(
    graphql(createUser, { name: 'createUser' }),
    graphql(SIGNIN_USER_MUTATION, { name: 'signinUser' }),
)(SignUp)

// export default graphql(createUser, { name: 'createUser' })(SignUp)
