import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ErrorContainer, ErrorHeader, ErrorText } from './styles'

class LoadingError extends Component {
  componentDidMount() {
    console.error(this.props.error)
  }
  render() {
    const { error } = this.props
    let errorText = 'Please try to refresh the page.'

    if (error && error.message.includes('Permissions')) {
      errorText = 'You don\'t have permission to view this page. Please login or signup first.'
    }

    return (
      <ErrorContainer>
        <FontAwesomeIcon icon="exclamation-circle" />
        <ErrorHeader>Whoops, looks like something went wrong.</ErrorHeader>
        <ErrorText>{errorText}</ErrorText>
      </ErrorContainer>
    )
  }
}

export default LoadingError
