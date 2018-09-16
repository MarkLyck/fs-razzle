import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Formik } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Form, { Row, Field, ErrorMessage } from 'components/Form'
import Button from 'components/Button'
import ModalHeader from 'components/Dialogs/ModalHeader'
import Success from 'components/Success'
import { client } from 'src/App'

const SEND_RESET_PW_EMAIL = gql`
  query sendResetPWEmail($email: String!) {
    sendResetPWEmail(email: $email) {
      success
    }
  }
`

class ResetPassord extends Component {
  validate = values => {
    let errors = {}
    if (!values.email) {
      errors.email = 'Please enter an email'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }

    return errors
  }

  renderErrors = (errors, touched) => {
    let errorText = ''

    if (touched.email && errors.email) errorText = errors.email

    return errorText ? <ErrorMessage>{errorText}</ErrorMessage> : null
  }

  onSubmit = async (values, { setSubmitting, setStatus, setErrors }) => {
    const response = await client
      .query({
        query: SEND_RESET_PW_EMAIL,
        variables: { email: values.email },
      })
      .catch(err => setErrors({ email: 'No user with that email exists' }))
    if (response && response.data) {
      setStatus({ success: true })
    }

    setSubmitting(false)
  }

  render() {
    const { onRequestClose } = this.props

    return (
      <React.Fragment>
        <Formik
          initialValues={{
            email: '',
          }}
          validate={this.validate}
          onSubmit={this.onSubmit}
          render={({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, status }) => {
            if (status && status.success) {
              return (
                <Success message="Success! Password reset email sent" onClick={onRequestClose} buttonText="close" />
              )
            }

            return (
              <React.Fragment>
                <ModalHeader title="Reset Password" toggleModal={onRequestClose} />
                <Form onSubmit={handleSubmit.bind(this)}>
                  {this.renderErrors(errors, touched)}
                  <Row>
                    <Field
                      id="email"
                      type="email"
                      name="email"
                      label="email"
                      icon="envelope"
                      placeholder="example@email.com"
                      onChange={e => {
                        handleChange(e)
                        this.emailValueHasChanged = true
                      }}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                  </Row>
                  <Button type="submit" variant="raised" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <FontAwesomeIcon icon="spinner-third" spin style={{ fontSize: '1.25rem' }} />
                    ) : (
                      'Send password reset email'
                    )}
                  </Button>
                </Form>
              </React.Fragment>
            )
          }}
        />
      </React.Fragment>
    )
  }
}

export default ResetPassord
