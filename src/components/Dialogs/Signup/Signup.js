import React, { Component } from 'react'
import platform from 'platform'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'
import Modal from 'react-modal'
import { hasStorage } from 'common/utils/featureTests'
import { getDeviceType } from 'common/utils/helpers'
import ModalHeader from 'components/Dialogs/ModalHeader'
import AccountInfo from './AccountInfo'
import BillingInfo from './BillingInfo'
import { ModalContainer, modalStyles, overlayClass } from '../styles'

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
    $taxPercent: Float!
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
      taxPercent: $taxPercent
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

  handleSignup = (name, taxPercent, { token }) => {
    const { history, createUser, signinUser } = this.props
    const { accountInfo } = this.state

    const location =
      hasStorage && localStorage.getItem('location') ? JSON.parse(localStorage.getItem('location')) : null
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
        taxPercent,
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
    const { onRequestClose, planPrice } = this.props

    return (
      <Modal isOpen onRequestClose={onRequestClose} overlayClassName={overlayClass} css={modalStyles}>
        <ModalContainer>
          <ModalHeader title="Sign up" toggleModal={onRequestClose} />
          {page === 1 && <AccountInfo nextPage={this.nextPage} />}
          {page === 2 && (
            <BillingInfo
              taxPercent={accountInfo.taxPercent}
              handleSignup={this.handleSignup}
              signupError={signupError}
              planPrice={planPrice}
            />
          )}
        </ModalContainer>
      </Modal>
    )
  }
}

export default compose(
  graphql(CREATE_USER, { name: 'createUser' }),
  graphql(SIGNIN_USER_MUTATION, { name: 'signinUser' })
)(SignUp)
