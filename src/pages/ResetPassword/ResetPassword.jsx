import React, { Component } from 'react'
import { Formik } from 'formik'
import gql from 'graphql-tag'
import Form, { Row, Field, ErrorMessage } from 'components/Form'
import { Logo, FieldLabel, ResetPWContainer } from './styles'
import Button from 'components/Button'
import { client } from 'src/App'

const SEND_RESET_PW_EMAIL = gql`
  query sendResetPWEmail($email: String!) {
    sendResetPWEmail(email: $email) {
      success
    }
  }
`

class ResetPassword extends Component {
  validate = values => {
    let errors = {}
    console.log(values)
    if (!values.newPassword) {
      errors.newPassword = 'Please enter a new password'
    } else if (!values.repeatPassword) {
      errors.repeatPassword = 'Please enter repeat the password'
    } else if (values.newPassword !== values.repeatPassword) {
      errors.repeatPassword = 'Passwords do not match'
    }

    return errors
  }

  renderErrors = (errors, touched) => {
    let errorText = ''

    console.log(errors, touched)

    if (touched.newPassword && errors.newPassword) errorText = errors.newPassword
    if (touched.repeatPassword && errors.repeatPassword) errorText = errors.repeatPassword

    return errorText ? <ErrorMessage>{errorText}</ErrorMessage> : null
  }

  onSubmit = async (values, { setSubmitting }) => {
    // const { data } = await client.query({
    //   query: SEND_RESET_PW_EMAIL,
    //   variables: { email: values.email },
    // })
    setSubmitting(false)
  }

  render() {
    return (
      <ResetPWContainer className="test">
        <Logo />
        <Formik
          initialValues={{
            newPassword: '',
            repeatPassword: '',
          }}
          validate={this.validate}
          onSubmit={this.onSubmit}
          render={({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
            <Form onSubmit={handleSubmit}>
              {this.renderErrors(errors, touched)}
              <FieldLabel>New password</FieldLabel>
              <Row>
                <Field
                  id="newPassword"
                  type="password"
                  name="new Password"
                  label="New Password"
                  icon={['far', 'lock-alt']}
                  placeholder="●●●●●●"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.newPassword}
                />
              </Row>
              <FieldLabel>Repeat password</FieldLabel>
              <Row>
                <Field
                  id="repeatPassword"
                  type="password"
                  name="Repeat Password"
                  label="Repeat Password"
                  icon={['far', 'lock-alt']}
                  placeholder="●●●●●●"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.repeatPassword}
                />
              </Row>
              <Button type="submit" variant="raised" disabled={isSubmitting}>
                Reset password
              </Button>
            </Form>
          )}
        />
      </ResetPWContainer>
    )
  }
}
export default ResetPassword
