import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StripeProvider, Elements } from 'react-stripe-elements'
import CheckoutForm from './checkoutForm'

class BillingInfo extends Component {
  state = {
    termsIsVisible: false,
  }

  submitBillingInfo = () => {
    // TODO add Form validation here...
    const { name, cardNumber, expiryDate, cvc } = this.state
    const billingDetails = {
      name,
      number: cardNumber,
      expiryDate,
      cvc,
    }
    this.props.handleSignup(billingDetails)
  }

  toggleTerms = () => this.setState({ termsIsVisible: !this.state.termsIsVisible })

  render() {
    const { tax, handleSignup, signupError } = this.props

    return (
      <StripeProvider apiKey="pk_test_hh5vsZ7wNnMi80XJgzHVanEm">
        <Elements>
          <CheckoutForm tax={tax} handleSignup={handleSignup} signupError={signupError} />
        </Elements>
      </StripeProvider>
    )
  }
}

BillingInfo.propTypes = {
  handleSignup: PropTypes.func.isRequired,
  signupError: PropTypes.string,
  tax: PropTypes.number,
}

export default BillingInfo
