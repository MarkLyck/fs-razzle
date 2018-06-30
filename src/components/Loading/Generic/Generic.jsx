import React from 'react'
import styled from 'react-emotion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 16px;
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height 100%;
    min-height: 400px;
    width: 100%;
`

const LoadingTitle = styled.h2`
  font-size: 1.8rem;
`

const GenericLoader = () => (
  <Container>
    <Icon icon="spinner-third" spin size="6x" />
    <LoadingTitle>Loading...</LoadingTitle>
  </Container>
)

export default GenericLoader
