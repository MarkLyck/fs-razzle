import styled from 'react-emotion'

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 400px;
  padding: 32px;
  box-sizing: border-box;

  svg {
    margin-bottom: 16px;
    font-size: 2rem;
    color: ${props => props.theme.colors.black};
  }
`

export const ErrorHeader = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 16px;
  text-align: center;
`

export const ErrorText = styled.p`
  color: ${props => props.theme.colors.gray};
  text-align: center;
`
