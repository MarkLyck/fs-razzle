import styled from 'react-emotion'

export const SuggestionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 8px;
  box-sizing: border-box;
  margin-bottom: 8px;
`

export const LastUpdated = styled.h3`
  margin: 16px 0;
  text-align: center;
  color: ${props => props.theme.colors.gray};
`

export const DateLabel = styled.span`
  font-weight: 500;
`
