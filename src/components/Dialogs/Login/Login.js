import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Modal from 'react-modal'
import { ModalContainer, ModalTitle } from '../styles'
import { Formik } from 'formik'
import Form, { Row, Field, ErrorMessage } from 'components/Form'
import Button from 'components/Button'

const AUTHENTICATE_EMAIL_USER = gql`
  mutation AuthenticateUser($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      token
    }
  }
`

class Login extends Component {
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
    if (touched.email && errors.email) errorText = errors.email

    return errorText ? <ErrorMessage>{errorText}</ErrorMessage> : null
  }

  render() {
    const { onRequestClose } = this.props

    return (
      <Modal
        isOpen
        onRequestClose={onRequestClose}
        overlayClassName={css`
          z-index: 10;
          background rgba(0,0,0,0.5);
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
        css={`
          background: white;
          width: 320px;
          height: auto;
          outline: none;
          z-index: 11;
        `}
      >
        <ModalContainer>
          <ModalTitle>Login</ModalTitle>
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
                <Button type="submit" color="primary" variant="raised" disabled={isSubmitting}>
                  login
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
