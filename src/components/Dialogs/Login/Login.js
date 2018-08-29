import React, { Component } from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ModalContainer, overlayClass, modalStyles } from '../styles'
import { Formik } from 'formik'
import Form, { Row, Field, ErrorMessage } from 'components/Form'
import ModalHeader from 'components/Dialogs/ModalHeader'
import Button from 'components/Button'

const AUTHENTICATE_EMAIL_USER = gql`
  mutation AuthenticateUser($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      token
    }
  }
`

class Login extends Component {
  emailValueHasChanged = false

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

    return errors
  }

  onSubmit = (values, { setSubmitting }) => {
    this.handleLogin(values)
      .then(() => setSubmitting(false))
      .catch(error => console.error('login error', error))
  }

  handleLogin = values => {
    const { history } = this.props
    return this.props
      .signinUser({ variables: { email: values.email, password: values.password } })
      .then(response => {
        localStorage.setItem('graphcoolToken', response.data.authenticateUser.token)
        history.push('/dashboard/portfolio')
      })
      .catch(e => console.error(e))
  }

  renderErrors = (errors, touched) => {
    let errorText = ''

    if (touched.password && errors.password) errorText = errors.password
    if (touched.email && errors.email && (this.emailValueHasChanged || touched.password)) errorText = errors.email

    return errorText ? <ErrorMessage>{errorText}</ErrorMessage> : null
  }

  render() {
    const { onRequestClose } = this.props

    return (
      <Modal isOpen onRequestClose={onRequestClose} overlayClassName={overlayClass} css={modalStyles}>
        <ModalContainer>
          <ModalHeader title="Login" toggleModal={onRequestClose} />
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validate={this.validate}
            onSubmit={this.onSubmit}
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
                <Row>
                  <Field
                    id="password"
                    type="password"
                    name="password"
                    label="password"
                    icon={['far', 'lock-alt']}
                    placeholder="●●●●●●"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                </Row>
                <Button type="submit" color="primary" variant="raised" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <FontAwesomeIcon icon="spinner-third" spin style={{ fontSize: '1.25rem' }} />
                  ) : (
                    'Login'
                  )}
                </Button>
              </Form>
            )}
          />
        </ModalContainer>
      </Modal>
    )
  }
}

Login.propTypes = {
  signinUser: PropTypes.func,
  onClose: PropTypes.func,
}

export default graphql(AUTHENTICATE_EMAIL_USER, { name: 'signinUser' })(Login)
