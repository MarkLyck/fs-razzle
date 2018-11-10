import styled from 'react-emotion'

export const SuggItem = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  p {
    margin-bottom: 8px;
    font-size: 0.8rem;
    color: ${props => props.theme.colors.gray};
    white-space: nowrap;
  }
  h4 {
    font-size: 1rem;
    font-weight: 400;
  }
`
