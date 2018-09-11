import React, { Component } from 'react'
import platform from 'platform'
import gql from 'graphql-tag'
import { graphql, compose } from 'react-apollo'
import Modal from 'react-modal'
import { hasStorage } from 'common/utils/featureTests'
import { getDeviceType } from 'common/utils/helpers'
import ModalHeader from 'components/Dialogs/ModalHeader'
import { client } from 'src/App'
import AccountInfo from './AccountInfo'
import BillingInfo from './BillingInfo'
import { ModalContainer, modalStyles, overlayClass } from '../styles'

const SIGNUP_USER = gql`
  query signupUser(
    $email: String!
    $password: String!
    $name: String!
    $plan: String!
    $type: String!
    $stripeToken: String!
    $address: Json
    $location: Json
    $device: Json
    $taxPercent: Float!
  ) {
    signupUser(
      email: $email
      password: $password
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
      token
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

  handleSignup = async (name, taxPercent, { token }) => {
    const { history } = this.props
    const { accountInfo } = this.state

    const location =
      hasStorage && localStorage.getItem('location') ? JSON.parse(localStorage.getItem('location')) : null
    const plan = hasStorage && localStorage.getItem('selectedPlan') ? localStorage.getItem('selectedPlan') : 'ENTRY'
    const type = plan === 'ENTRY' ? 'trial' : 'subscriber'

    try {
      const { data } = await client.query({
        query: SIGNUP_USER,
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
      if (hasStorage) {
        localStorage.setItem('graphcoolToken', data.signupUser.token)
      }
      history.push('/dashboard/portfolio')
    } catch (error) {
      console.error('signup error', error)
      this.setState({ signupError: error.message })
    }
  }

  render() {
    const { page, accountInfo, signupError } = this.state
    const { onRequestClose, planPrice } = this.props

    console.log(signupError)

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

export default compose(graphql(SIGNIN_USER_MUTATION, { name: 'signinUser' }))(SignUp)
