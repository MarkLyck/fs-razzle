import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import Form, { Field, Row, ErrorMessage } from 'components/Form'
import Button from 'components/Button'
import CountrySelect from './CountrySelect'

class AccountInfo extends Component {
  state = {
    country: '',
    countryTouched: false,
  }

  countrySelectBlur = () => this.setState({ countryTouched: true })
  onCountryChange = country => this.setState({ country })

  validate = values => {
    let errors = {}
    if (!values.email) {
      errors.email = 'Please enter an email'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }

    if (!values.password) {
      errors.password = 'Please enter a password'
    } else if (values.password.length < 4) {
      errors.password = 'Password must be at least 4 characters'
    }

    if (this.state.country && this.state.country.taxPercent && !values.address)
      errors.address = 'Please enter your address'
    else if (this.state.country && this.state.country.taxPercent && !values.city) errors.city = 'Please enter your city'
    else if (this.state.country && this.state.country.taxPercent && !values.postalCode)
      errors.postalCode = 'Please enter your postal Code'

    return errors
  }

  renderErrors = (errors, touched) => {
    let errorText = ''

    if (this.state.country.taxPercent && touched.address && errors.address) errorText = errors.address
    if (this.state.country.taxPercent && touched.city && errors.city) errorText = errors.city
    if (this.state.country.taxPercent && touched.postalCode && errors.postalCode) errorText = errors.postalCode
    if (this.state.countryTouched && !this.state.country) errorText = 'Please choose your country'
    if (touched.password && errors.password) errorText = errors.password
    if (touched.email && errors.email) errorText = errors.email

    return errorText ? <ErrorMessage>{errorText}</ErrorMessage> : null
  }

  renderFullAddress = (values, handleChange, handleBlur) => {
    if (!this.state.country || !this.state.country.taxPercent) return null

    return (
      <React.Fragment>
        <Row>
          <Field
            id="address"
            name="address"
            label="Street address"
            placeholder="Wallstreet 14"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address}
          />
        </Row>
        <Row>
          <Field
            id="city"
            name="city"
            label="City"
            placeholder="New York"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.city}
          />
          <Field
            id="postalCode"
            name="postalCode"
            label="Postal code"
            placeholder="10075"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.postalCode}
          />
        </Row>
      </React.Fragment>
    )
  }

  render() {
    return (
      <Formik
        initialValues={{
          email: '',
          password: '',
          country: '',
          city: '',
          address: '',
          postalCode: '',
        }}
        validate={this.validate}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false)
          values.country = this.state.country.label
          values.taxPercent = this.state.country.taxPercent || 0
          this.props.nextPage(values)
        }}
        render={({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            {this.renderErrors(errors, touched)}
            <Row>
              <Field
                autoFocus
                id="email"
                type="email"
                name="email"
                label="email"
                placeholder="example@email.com"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </Row>
            <Row>
              <Field
                id="password"
                type="password"
                name="password"
                label="password"
                placeholder="●●●●●●"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </Row>

            <Row>
              <CountrySelect id="country=select" onChange={this.onCountryChange} onBlur={this.countrySelectBlur} />
            </Row>
            {this.renderFullAddress(values, handleChange, handleBlur)}

            <Button className="submit-button" type="submit" variant="raised" disabled={isSubmitting}>
              Next
            </Button>
          </Form>
        )}
      />
    )
  }
}

AccountInfo.propTypes = {
  nextPage: PropTypes.func.isRequired,
}

export default AccountInfo
