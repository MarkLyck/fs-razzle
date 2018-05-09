import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion/react/theming'
import { DialogContent } from 'material-ui/Dialog'
import { StripeProvider, Elements } from 'react-stripe-elements'
import theme from 'common/theme'
import { dialogStyles } from '../styles'
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

    renderTaxInfo = tax => (
        <div>
            <p>Tax</p>
            <p>{tax}</p>
        </div>
    )

    render() {
        const { tax, handleSignup, signupError } = this.props

        return (
            <ThemeProvider theme={theme}>
                <DialogContent style={dialogStyles}>
                    <StripeProvider apiKey="pk_test_EAYel8PILq2WQhZqRK7XRemy">
                        <Elements>
                            <CheckoutForm tax={tax} handleSignup={handleSignup} signupError={signupError} />
                        </Elements>
                    </StripeProvider>
                </DialogContent>
            </ThemeProvider>
        )
    }
}

BillingInfo.propTypes = {
    handleSignup: PropTypes.func.isRequired,
    signupError: PropTypes.string,
    tax: PropTypes.number,
}

export default BillingInfo
