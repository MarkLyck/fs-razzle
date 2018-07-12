import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Formik } from 'formik'
import { DialogContent } from 'material-ui/Dialog'
import Form, { Field } from 'components/Form/Field'
import Button from 'components/Button'
import countries from 'common/data/countries'
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

  // validateAccountInfo = () => {
  //   const { email, password, country, address, city, postalCode } = this.state

  //   // eslint-disable-next-line
  //   const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+")
  //)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  //   const selectedCountry = countries.filter(item => item.label === country)[0]
  //   if (!emailRegex.test(email)) {
  //     return { error: { message: 'Invalid email' } }
  //   } else if (!password) {
  //     return { error: { message: 'Please enter a password' } }
  //   } else if (password.length < 4) {
  //     return { error: { message: 'Password must be at least 4 characters' } }
  //   } else if (!country) {
  //     return { error: { message: 'Please choose your country' } }
  //   } else if (selectedCountry && selectedCountry.taxPercent && !address) {
  //     return { error: { message: 'Please enter your address' } }
  //   } else if (selectedCountry && selectedCountry.taxPercent && !city) {
  //     return { error: { message: 'Please enter your city' } }
  //   } else if (selectedCountry && selectedCountry.taxPercent && !postalCode) {
  //     return { error: { message: 'Please enter your address' } }
  //   }
  //   return { selectedCountry }
  // }

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
          <div>
            <input
              label="Street address"
              type="text"
              className={`${streetClass} ${addressError ? 'input-error' : ''}`}
              onChange={event => this.handleChange('address', event.target.value)}
              onBlur={() => this.handleBlur('streetClass')}
              // onFocus={() => this.handleFocus('streetClass')}
              placeholder="Elm Street 123"
            />
          </div>
          <div>
            <input
              label="City"
              type="text"
              className={`${cityClass} ${cityError ? 'input-error' : ''}`}
              onChange={event => this.handleChange('city', event.target.value)}
              onBlur={() => this.handleBlur('cityClass')}
              // onFocus={() => this.handleFocus('cityClass')}
              placeholder="New York"
            />
            <input
              label="Postal code"
              type="text"
              className={`${postalClass} ${postalError ? 'input-error' : ''}`}
              onChange={event => this.handleChange('postalCode', event.target.value)}
              onBlur={() => this.handleBlur('postalClass')}
              // onFocus={() => this.handleFocus('postalClass')}
              placeholder="10075"
            />
          </div>
        </div>
      )
    }
    return null
  }

  render() {
    // const { error, emailClass, passwordClass } = this.state
    // const emailError = emailClass !== 'focused' && error.message && error.message.indexOf('email') > -1
    // const passwodError = passwordClass !== 'focused' && error.message && error.message.indexOf('password') > -1

    return (
      <DialogContent style={dialogStyles}>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validate={values => {
            // same as above, but feel free to move this into a class method now.
            let errors = {}
            if (!values.email) {
              errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
              errors.email = 'Invalid email address'
            }
            return errors
          }}
          onSubmit={(values, { setSubmitting, setErrors }) => {
            // LoginToMyApp(values).then(
            //   user => {
            //     setSubmitting(false)
            //     // do whatevs...
            //     // props.updateUser(user)
            //   },
            //   errors => {
            //     setSubmitting(false)
            //     // Maybe transform your API's errors into the same shape as Formik's
            //     setErrors(transformMyApiErrors(errors))
            //   }
            // )
          }}
          render={({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              <Field
                id="account-email"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {touched.email && errors.email && <div>{errors.email}</div>}
              <Field
                id="account-password"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {touched.password && errors.password && <div>{errors.password}</div>}
              <Button type="submit" disabled={isSubmitting}>
                Next
              </Button>
            </Form>
          )}
        />
        {/* <form>
          {error.message && <p message={error.message} />}
          <div className={error.message ? 'form-error' : ''}>
            <input
              label="Email"
              type="email"
              autoFocus
              className={`${emailClass} ${emailError ? 'input-error' : ''}`}
              onChange={event => this.handleChange('email', event.target.value)}
              onBlur={() => this.handleBlur('emailClass')}
              onFocus={() => this.handleFocus('emailClass')}
              placeholder="example@domain.com"
            />
          </div>
          <div>
            <input
              label="Password"
              type="password"
              className={`${passwordClass} ${passwodError ? 'input-error' : ''}`}
              onChange={event => this.handleChange('password', event.target.value)}
              onBlur={() => this.handleBlur('passwordClass')}
              onFocus={() => this.handleFocus('passwordClass')}
              autoComplete="current-password"
              placeholder="••••••••"
            />
          </div>
          <div>
            <CountrySelect
              handleCountrySelect={this.handleCountrySelect}
              onBlur={() => this.handleBlur('countryClass')}
              onFocus={() => this.handleFocus('countryClass')}
            />
          </div>
          {this.renderFullAddress()}
          <Button color="primary" style={nextBtnStyles} onClick={this.submitAccountInfo}>
            Next
          </Button>
        </form> */}
      </DialogContent>
    )
  }
}

AccountInfo.propTypes = {
  nextPage: PropTypes.func.isRequired,
}

export default AccountInfo
