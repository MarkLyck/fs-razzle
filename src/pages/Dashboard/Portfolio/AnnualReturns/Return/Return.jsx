import React from 'react'
import styled from 'react-emotion'

const ReturnContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  h3 {
    font-weight: 100;
    margin-bottom: 2px;
    font-size: 1.2rem;
  }
`

const ReturnValue = styled.p`
  color: ${props => (props.returnSince >= 0 ? props.theme.colors.secondary : props.theme.colors.error)};
  font-weight: 500;
`

const Return = ({ title, returnSince, className }) => (
  <ReturnContainer className={className}>
    <h3>{title}</h3>
    <ReturnValue returnSince={returnSince}>
      {returnSince >= 0 ? '+' : ''}
      {returnSince}%
    </ReturnValue>
  </ReturnContainer>
)

export default Return
