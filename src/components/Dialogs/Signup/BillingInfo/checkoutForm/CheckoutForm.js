import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.signupError) return { submitting: false }
    return {}
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

  handleSubmit = e => {
    e.preventDefault()
    const { submitting } = this.state
    const { stripe, taxPercent, handleSignup } = this.props

    if (submitting) return null
    if (!this.name) {
      this.setState({ submitting: false, error: { message: 'Please enter your full name' } })
      return null
    }

    this.setState({ submitting: true, error: {} })
    stripe.createToken().then(payload => {
      if (payload.error) {
        this.setState({ submitting: false, error: payload.error })
      } else {
        handleSignup(this.name, taxPercent, payload)
      }
    })
    return e
  }

  renderErrors() {
    const { signupError } = this.props
    const { error } = this.state

    let signupErrorMessage = signupError

    if (signupError.includes('Email already in use')) {
      signupErrorMessage = 'A user with this email already exists.'
    } else if (signupError.includes('timed out')) {
      signupErrorMessage = 'Signup timed out, Please refresh the page and try again.'
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
    const { planPrice, taxAmount, taxPercent } = this.props
    const cardNumberError = error.message && error.message.indexOf('number') > -1

    return (
      <Form onSubmit={this.handleSubmit}>
        {this.renderErrors()}
        <Row>
          <Field
            autoFocus
            id="name"
            name="name"
            label="Name"
            placeholder="John Doe"
            icon="user"
            onChange={this.setName}
          />
        </Row>

        <Row>
          <FieldContainer>
            <FontAwesomeIcon icon="credit-card" />
            <CardNumberElement
              className={`input stripe-input ${this.state.cardNumber} ${
                cardNumberError && this.state.cardNumber !== 'empty' ? 'input-error' : ''
              }`}
              onBlur={() => this.handleBlur('cardNumber')}
              onFocus={() => this.handleFocus('cardNumber')}
              {...createOptions()}
            />
            <div className={`baseline baseline-${this.state.cardNumber}`} />
          </FieldContainer>
        </Row>

        <Row style={{ marginBottom: '24px' }}>
          <FieldContainer>
            <FontAwesomeIcon icon="calendar-times" />
            <CardExpiryElement
              className={`input stripe-input ${this.state.cardExpiry}`}
              onBlur={() => this.handleBlur('cardExpiry')}
              onFocus={() => this.handleFocus('cardExpiry')}
              {...createOptions()}
            />
          </FieldContainer>
          <FieldContainer>
            <FontAwesomeIcon icon={['far', 'lock-alt']} />
            <CardCVCElement
              className={`input stripe-input ${this.state.cardCVC}`}
              onBlur={() => this.handleBlur('cardCVC')}
              onFocus={() => this.handleFocus('cardCVC')}
              {...createOptions()}
            />
          </FieldContainer>
        </Row>

        <div className="beside">
          <p className="description">Price after 30 days:</p>
          <p className={`price ${!taxAmount && 'semi-bold'}`}>
            ${planPrice} {!taxAmount && 'monthly'}
          </p>
        </div>
        {!!taxPercent && (
          <React.Fragment>
            <div className="beside">
              <p className="description">{taxPercent}% VAT Tax:</p>
              <p className="price">${taxAmount.toFixed(2)}</p>
            </div>
            <div className="beside">
              <p className="price semi-bold">Total price after 30 days:</p>
              <p className="price semi-bold">${(planPrice + taxAmount).toFixed(2)} / m</p>
            </div>
          </React.Fragment>
        )}
        <Button color="primary" type="submit" variant="raised" disabled={submitting} style={{ marginTop: '16px' }}>
          {!submitting ? (
            'Try it free for 30 days'
          ) : (
            <FontAwesomeIcon icon="spinner-third" spin style={{ fontSize: '1.25rem' }} />
          )}
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
  taxAmount: PropTypes.number,
  taxPercent: PropTypes.number,
  planPrice: PropTypes.number,
  handleSignup: PropTypes.func,
}

export default injectStripe(CheckoutForm)
