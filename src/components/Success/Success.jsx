import React from 'react'
import styled from 'react-emotion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'components/Button'

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    color: ${props => props.theme.colors.secondary};
  }
`

const SuccessMessage = styled.h3`
  color: ${props => props.theme.colors.black};
  font-size: 1.2rem;
  margin: 16px 0;
`

const Success = ({ message, buttonText, onClick }) => (
  <SuccessContainer>
    <FontAwesomeIcon icon="check-circle" size="4x" />
    <SuccessMessage>{message}</SuccessMessage>
    <Button variant="raised" type="light" color="black" hoverColor="secondary" onClick={onClick}>
      {buttonText}
    </Button>
  </SuccessContainer>
)

export default Success
