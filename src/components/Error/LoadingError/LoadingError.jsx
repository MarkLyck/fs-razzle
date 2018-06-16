import React from 'react'
import Icon from '@fortawesome/react-fontawesome'
import { ErrorContainer, ErrorHeader, ErrorText } from './styles'

const LoadingError = ({ retry }) => (
  <ErrorContainer>
    <Icon icon="exclamation-circle" />
    <ErrorHeader>Whoops, looks like something went wrong.</ErrorHeader>
    <ErrorText>Please try to refresh the page.</ErrorText>
  </ErrorContainer>
)

export default LoadingError
