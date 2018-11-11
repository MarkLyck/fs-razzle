import styled from 'react-emotion'
import { boxStyle } from 'components/Box'

export const List = styled.ul`
  ${boxStyle};
  flex-direction: column;
  width: 100%;
  margin: 16px 0;
`

export const ListItem = styled.li`
  padding: 16px;
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
  span {
    font-weight: 500;
  }
`
