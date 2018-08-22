// CardSection.js
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from 'components/Button'
import { injectStripe, CardNumberElement, CardExpiryElement, CardCVCElement } from 'react-stripe-elements'
import theme from 'common/utils/theme'
import Disclaimer from 'components/Legal/Disclaimer'
import TermsOfService from 'components/Dialogs/TermsOfService'
import Form, { Row, Field, ErrorMessage } from 'components/Form'
import { FieldContainer } from './styles'

const createOptions = () => ({
  style: {
    base: {
      color: '#32325D',
      fontWeight: 500,
      fontFamily: 'Source Code Pro, Consolas, Menlo, monospace',
      fontSize: '16px',
      fontSmoothing: 'antialiased',

      '::placeholder': {
        color: '#CFD7DF',
      },
      ':-webkit-autofill': {
        color: theme.colors.warning,
      },
    },
    invalid: {
      color: theme.colors.error,

      '::placeholder': {
        color: '#FFCCA5',
      },
    },
  },
})

class CheckoutForm extends Component {
  state = {
    cardNumber: 'empty',
    cardCVC: 'empty',
    cardExpiry: 'empty',
    postalCode: 'empty',
    nameClass: 'empty',
    error: {},
    submitting: false,
    showTerms: false,
  }

  setName = e => {
    e.preventDefault()
    this.name = e.target.value
  }

  name = ''

  handleBlur = elementName => {
    const newState = this.state
    newState[elementName] = 'filled'
    this.setState(newState)
  }

  handleFocus = elementName => {
    const newState = this.state
    newState[elementName] = 'focused'
    this.setState(newState)
  }

  handleSubmit = ev => {
    ev.preventDefault()
    console.log('handleSubmit')
    if (this.state.submitting) return null
    console.log('not already submitting')
    if (!this.name) {
      this.setState({ submitting: false, error: { message: 'Please enter your full name' } })
      return null
    }
    console.log('name exists')

    this.setState({ submitting: true, error: {} })
    this.props.stripe.createToken().then(payload => {
      if (payload.error) {
        console.log('payload error')
        this.setState({ submitting: false, error: payload.error })
      } else {
        console.log('handle signUp')
        this.props.handleSignup(this.name, payload)
      }
    })
    return ev
  }

  renderErrors() {
    const { signupError } = this.props
    const { error } = this.state

    let signupErrorMessage = signupError

    if (signupError.includes('User already exists with that information')) {
      signupErrorMessage = 'A user with this email already exists.'
    } else if (signupError.includes('GraphQL')) {
      signupErrorMessage =
        'Something went wrong trying to create your account. Please clear your browser history and try again.'
    }

    if (signupErrorMessage) return <ErrorMessage>{signupErrorMessage}</ErrorMessage>
    else if (error.message) return <ErrorMessage>{error.message}</ErrorMessage>
  }

  toggleTerms = () => this.setState({ showTerms: !this.state.showTerms })

  render() {
    const { error, submitting, showTerms } = this.state
    const { tax } = this.props
    const cardNumberError = error.message && error.message.indexOf('number') > -1

    return (
      <Form onSubmit={this.handleSubmit}>
        {this.renderErrors()}
        <Row>
          <Field autoFocus id="name" name="name" label="Name" placeholder="John Doe" onChange={this.setName} />
        </Row>

        <Row>
          <FieldContainer>
            <CardNumberElement
              className={`input stripe-input ${this.state.cardNumber} ${
                cardNumberError && this.state.cardNumber !== 'empty' ? 'input-error' : ''
              }`}
              onBlur={() => this.handleBlur('cardNumber')}
              onFocus={() => this.handleFocus('cardNumber')}
              {...createOptions()}
            />
            <label htmlFor="card-number" className={`${cardNumberError && 'label-error'} `}>
              Card number
            </label>
            <div className={`baseline baseline-${this.state.cardNumber}`} />
          </FieldContainer>
        </Row>

        <Row>
          <FieldContainer>
            <CardExpiryElement
              className={`input stripe-input ${this.state.cardExpiry}`}
              onBlur={() => this.handleBlur('cardExpiry')}
              onFocus={() => this.handleFocus('cardExpiry')}
              {...createOptions()}
            />
            <label htmlFor="card-expiry">Expiration</label>
            <div className={`baseline baseline-${this.state.cardExpiry}`} />
          </FieldContainer>
          <FieldContainer>
            <CardCVCElement
              className={`input stripe-input ${this.state.cardCVC}`}
              onBlur={() => this.handleBlur('cardCVC')}
              onFocus={() => this.handleFocus('cardCVC')}
              {...createOptions()}
            />
            <label htmlFor="card-cvc">CVC</label>
            <div className={`baseline baseline-${this.state.cardCVC}`} />
          </FieldContainer>
        </Row>

        <div className="beside">
          <p className="description">Price:</p>
          <p className={`price ${!tax ? 'semi-bold' : ''}`}>
            ${50} {!tax ? 'monthly' : ''}
          </p>
        </div>
        {tax ? (
          <div className="beside">
            <p className="description">VAT Tax:</p>
            <p className="price">${tax}</p>
          </div>
        ) : (
          ''
        )}
        {tax ? (
          <div className="beside">
            <p className="price semi-bold">Total price after 30 days:</p>
            <p className="price semi-bold">${50 + tax} / m</p>
          </div>
        ) : (
          ''
        )}
        <Button color="primary" type="submit" variant="raised">
          {!submitting ? 'Try it free for 30 days' : 'submitting'}
        </Button>
        <Disclaimer className="disclaimer">
          By signing up you agree to our{' '}
          <a role="button" tabIndex="0" onClick={this.toggleTerms}>
            Terms of Service
          </a>
        </Disclaimer>
        <TermsOfService open={showTerms} hideTerms={this.toggleTerms} />
      </Form>
    )
  }
}

CheckoutForm.propTypes = {
  stripe: PropTypes.object,
  tax: PropTypes.number,
  handleSignup: PropTypes.func,
}

export default injectStripe(CheckoutForm)
