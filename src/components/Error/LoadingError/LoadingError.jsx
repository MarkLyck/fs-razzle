import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ErrorContainer, ErrorHeader, ErrorText } from './styles'

class LoadingError extends Component {
  componentDidMount() {
    console.error(this.props.error)
  }
  render() {
    return (
      <ErrorContainer>
        <FontAwesomeIcon icon="exclamation-circle" />
        <ErrorHeader>Whoops, looks like something went wrong.</ErrorHeader>
        <ErrorText>Please try to refresh the page.</ErrorText>
      </ErrorContainer>
    )
  }
}

export default LoadingError
