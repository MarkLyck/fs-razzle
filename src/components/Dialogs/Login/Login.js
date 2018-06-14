import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import { ThemeProvider } from 'emotion/react/theming'
import { gql, graphql } from 'react-apollo'
import Dialog, { DialogTitle, DialogContent } from 'material-ui/Dialog'
import theme from 'common/theme'
import Form, { Row, Field, ErrorMessage } from 'components/Form'
import Button from 'material-ui/Button'
import Slide from 'material-ui/transitions/Slide'
import { dialogStyles, nextBtnStyles } from './styles'

class Login extends Component {
  state = {
    email: {},
    password: '',
    error: {},
    emailClass: 'empty',
    passwordClass: 'empty',
  }

  componentDidMount() {
    Router.prefetch('/dashboard/portfolio')
  }

  handleLogin = () => {
    const { email, password } = this.state
    this.props
      .signinUser({ variables: { email, password } })
      .then(response => {
        localStorage.setItem('graphcoolToken', response.data.authenticateUser.token)
        Router.push('/dashboard/portfolio')
      })
      .catch(e => console.error(e))
  }

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

  validateAccountInfo = () => {
    const { email } = this.state

    // eslint-disable-next-line
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!emailRegex.test(email)) {
      return { error: { message: 'Invalid email' } }
    }
    return ''
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

  render() {
    const { error, emailClass, passwordClass } = this.state
    const { signinUser, onClose, ...other } = this.props

    const emailError = emailClass !== 'focused' && error.message && error.message.indexOf('email') > -1
    const passwodError = passwordClass !== 'focused' && error.message && error.message.indexOf('password') > -1

    return (
      <ThemeProvider theme={theme}>
        <Dialog onClose={onClose} {...other} transition={Slide}>
          <DialogTitle>Login</DialogTitle>
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
              <Button color="primary" style={nextBtnStyles} onClick={this.handleLogin}>
                login
              </Button>
            </Form>
          </DialogContent>
        </Dialog>
      </ThemeProvider>
    )
  }
}

Login.propTypes = {
  signinUser: PropTypes.func,
  onClose: PropTypes.func,
}

const AUTHENTICATE_EMAIL_USER = gql`
  mutation AuthenticateUser($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      token
    }
  }
`

export default graphql(AUTHENTICATE_EMAIL_USER, { name: 'signinUser' })(Login)
