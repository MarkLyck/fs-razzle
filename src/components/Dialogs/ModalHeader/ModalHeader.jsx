import React from 'react'
import styled from 'react-emotion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ModalHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
  padding: 0 16px;
  box-sizing: border-box;
`

const ModalTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
`

const CloseButton = styled.button`
  padding: 8px;
  background: none;
  border: none;
  color: ${props => props.theme.colors.gray};

  &:hover {
    color: ${props => props.theme.colors.black};
  }
`

const ModalHeader = ({ title, toggleModal }) => (
  <ModalHeaderContainer>
    <ModalTitle>{title}</ModalTitle>
    <CloseButton onClick={toggleModal}>
      <FontAwesomeIcon icon={['far', 'times']} size="2x" />
    </CloseButton>
  </ModalHeaderContainer>
)

export default ModalHeader
