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
    const { planPrice, taxPercent, handleSignup, signupError } = this.props

    const taxAmount = planPrice * (taxPercent / 100)

    return (
      <StripeProvider apiKey="pk_live_UTFEdLHeTQIAA0o2JSBM3fwL">
        <Elements>
          <CheckoutForm
            taxPercent={taxPercent}
            taxAmount={taxAmount}
            planPrice={planPrice}
            handleSignup={handleSignup}
            signupError={signupError}
          />
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
