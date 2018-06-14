import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { ThemeProvider } from 'emotion/react/theming'
import { DialogContent } from 'material-ui/Dialog'
import Button from 'material-ui/Button'
import countries from 'common/data/countries'
import theme from 'common/theme'
import Form, { Row, Field, ErrorMessage } from 'components/Form'
import { dialogStyles, nextBtnStyles } from '../styles'
import CountrySelect from './CountrySelect'

class AccountInfo extends Component {
  state = {
    email: '',
    password: '',
    country: '',
    city: '',
    postalCode: '',
    address: '',
    emailClass: 'empty',
    passwordClass: 'empty',
    countryClass: 'empty',
    streetClass: 'empty',
    cityClass: 'empty',
    postalClass: 'empty',
    error: {},
  }

  handleCountrySelect = country => this.setState({ country })

  handleChange = (element, value) => {
    const newState = this.state
    newState[element] = value

    if (newState.error.message && newState.error.message.indexOf(element) > -1) {
      const validation = this.validateAccountInfo()
      if (validation.message !== newState.error.message) {
        newState.error = validation
      }
    }

    this.setState(newState)
  }

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

  validateAccountInfo = () => {
    const { email, password, country, address, city, postalCode } = this.state

    // eslint-disable-next-line
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const selectedCountry = countries.filter(item => item.label === country)[0]
    if (!emailRegex.test(email)) {
      return { error: { message: 'Invalid email' } }
    } else if (!password) {
      return { error: { message: 'Please enter a password' } }
    } else if (password.length < 4) {
      return { error: { message: 'Password must be at least 4 characters' } }
    } else if (!country) {
      return { error: { message: 'Please choose your country' } }
    } else if (selectedCountry && selectedCountry.taxPercent && !address) {
      return { error: { message: 'Please enter your address' } }
    } else if (selectedCountry && selectedCountry.taxPercent && !city) {
      return { error: { message: 'Please enter your city' } }
    } else if (selectedCountry && selectedCountry.taxPercent && !postalCode) {
      return { error: { message: 'Please enter your address' } }
    }
    return { selectedCountry }
  }

  submitAccountInfo = () => {
    const { email, password, address, city, postalCode } = this.state

    const validation = this.validateAccountInfo()

    if (!validation.error) {
      this.props.nextPage({
        email,
        password,
        selectedCountry: validation.selectedCountry,
        address,
        city,
        postalCode,
      })
    } else {
      this.setState({ error: validation.error })
    }
  }

  renderFullAddress = () => {
    const { error, streetClass, cityClass, postalClass } = this.state
    if (!this.state.country) {
      return null
    }

    const addressError = streetClass !== 'focused' && error.message && error.message.indexOf('address') > -1
    const cityError = cityClass !== 'focused' && error.message && error.message.indexOf('city') > -1
    const postalError = postalClass !== 'focused' && error.message && error.message.indexOf('post') > -1

    const country = _.find(countries, c => c.label === this.state.country)
    if (country && country.taxPercent) {
      return (
        <div>
          <Row>
            <Field
              label="Street address"
              type="text"
              className={`${streetClass} ${addressError ? 'input-error' : ''}`}
              inputState={streetClass}
              onChange={event => this.handleChange('address', event.target.value)}
              onBlur={() => this.handleBlur('streetClass')}
              onFocus={() => this.handleFocus('streetClass')}
              placeholder="Elm Street 123"
            />
          </Row>
          <Row>
            <Field
              label="City"
              type="text"
              className={`${cityClass} ${cityError ? 'input-error' : ''}`}
              inputState={cityClass}
              onChange={event => this.handleChange('city', event.target.value)}
              onBlur={() => this.handleBlur('cityClass')}
              onFocus={() => this.handleFocus('cityClass')}
              placeholder="New York"
            />
            <Field
              label="Postal code"
              type="text"
              className={`${postalClass} ${postalError ? 'input-error' : ''}`}
              inputState={postalClass}
              onChange={event => this.handleChange('postalCode', event.target.value)}
              onBlur={() => this.handleBlur('postalClass')}
              onFocus={() => this.handleFocus('postalClass')}
              placeholder="10075"
            />
          </Row>
        </div>
      )
    }
    return null
  }

  render() {
    const { error, emailClass, passwordClass } = this.state
    const emailError = emailClass !== 'focused' && error.message && error.message.indexOf('email') > -1
    const passwodError = passwordClass !== 'focused' && error.message && error.message.indexOf('password') > -1

    return (
      <ThemeProvider theme={theme}>
        <DialogContent style={dialogStyles}>
          <Form>
            {error.message && <ErrorMessage message={error.message} />}
            <Row className={error.message ? 'form-error' : ''}>
              <Field
                label="Email"
                type="email"
                autoFocus
                className={`${emailClass} ${emailError ? 'input-error' : ''}`}
                inputState={emailClass}
                onChange={event => this.handleChange('email', event.target.value)}
                onBlur={() => this.handleBlur('emailClass')}
                onFocus={() => this.handleFocus('emailClass')}
                placeholder="example@domain.com"
              />
            </Row>
            <Row>
              <Field
                label="Password"
                type="password"
                className={`${passwordClass} ${passwodError ? 'input-error' : ''}`}
                inputState={passwordClass}
                onChange={event => this.handleChange('password', event.target.value)}
                onBlur={() => this.handleBlur('passwordClass')}
                onFocus={() => this.handleFocus('passwordClass')}
                autoComplete="current-password"
                placeholder="••••••••"
              />
            </Row>
            <Row>
              <CountrySelect
                inputState={this.state.countryClass}
                handleCountrySelect={this.handleCountrySelect}
                onBlur={() => this.handleBlur('countryClass')}
                onFocus={() => this.handleFocus('countryClass')}
              />
            </Row>
            {this.renderFullAddress()}
            <Button color="primary" style={nextBtnStyles} onClick={this.submitAccountInfo}>
              Next
            </Button>
          </Form>
        </DialogContent>
      </ThemeProvider>
    )
  }
}

AccountInfo.propTypes = {
  nextPage: PropTypes.func.isRequired,
}

export default AccountInfo
