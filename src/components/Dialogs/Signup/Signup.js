import React, { Component } from 'react'
import platform from 'platform'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'
import { css } from 'emotion'
import Modal from 'react-modal'
import { hasStorage } from 'common/utils/featureTests'
import { getDeviceType } from 'common/utils/helpers'
import AccountInfo from './AccountInfo'
import BillingInfo from './BillingInfo'
import { ModalContainer, ModalTitle } from '../styles'

const CREATE_USER = gql`
  mutation(
    $email: String!
    $password: String!
    $name: String!
    $plan: String!
    $type: String!
    $stripeToken: String!
    $address: Json!
    $location: Json!
    $device: Json!
  ) {
    createUser(
      authProvider: { email: { email: $email, password: $password } }
      name: $name
      plan: $plan
      type: $type
      stripeToken: $stripeToken
      address: $address
      location: $location
      device: $device
    ) {
      id
    }
  }
`

const SIGNIN_USER_MUTATION = gql`
  mutation SigninUserMutation($email: String!, $password: String!) {
    signinUser(email: { email: $email, password: $password }) {
      token
    }
  }
`

class SignUp extends Component {
  state = {
    accountInfo: {},
    page: 1,
    signupError: '',
  }

  nextPage = accountInfo => this.setState({ page: this.state.page + 1, accountInfo })

  handleSignup = (name, { token }) => {
    const { history, createUser, signinUser } = this.props
    const { accountInfo } = this.state

    console.log('accountInfo', accountInfo)

    const location = hasStorage && localStorage.getItem('location') ? JSON.parse(localStorage.getItem('location')) : {}
    const plan = hasStorage && localStorage.getItem('selectedPlan') ? localStorage.getItem('selectedPlan') : 'ENTRY'
    const type = plan === 'ENTRY' ? 'trial' : 'subscriber'

    createUser({
      variables: {
        email: accountInfo.email,
        password: accountInfo.password,
        stripeToken: token.id,
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
      },
    })
      .then(user => {
        console.log('user', user)
        signinUser({
          variables: {
            email: accountInfo.email,
            password: accountInfo.password,
          },
        }).then(response => {
          if (hasStorage) {
            localStorage.setItem('graphcoolToken', response.data.signinUser.token)
          }
          history.push('/dashboard/portfolio')
        })
      })
      .catch(e => this.setState({ signupError: String(e) }))
  }

  render() {
    const { page, accountInfo, signupError } = this.state
    const { onRequestClose } = this.props

    console.log('state', this.state)

    const tax = accountInfo && accountInfo.selectedCountry ? accountInfo.selectedCountry.taxPercent : 0

    return (
      <Modal
        isOpen
        onRequestClose={onRequestClose}
        overlayClassName={css`
          z-index: 10;
          background rgba(0,0,0,0.5);
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
        css={`
          background: white;
          width: 360px;
          height: auto;
          outline: none;
          z-index: 11;
        `}
      >
        <ModalContainer>
          <ModalTitle>Sign up</ModalTitle>
          {page === 1 && <AccountInfo nextPage={this.nextPage} />}
          {page === 2 && <BillingInfo tax={tax} handleSignup={this.handleSignup} signupError={signupError} />}
        </ModalContainer>
      </Modal>
    )
  }
}

export default compose(
  graphql(CREATE_USER, { name: 'createUser' }),
  graphql(SIGNIN_USER_MUTATION, { name: 'signinUser' })
)(SignUp)
