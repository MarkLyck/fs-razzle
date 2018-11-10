import styled from 'react-emotion'

export const List = styled.ul`
  width: 100%;
  background: #fff;
  margin: 16px 0;
  border-radius: 4px;
  border: 1px solid #e6e6e6;
  box-shadow: 0 0.25rem 0 0 #e6e6e6;
`

export const ListItem = styled.li`
  padding: 16px;
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
  span {
    font-weight: 500;
  }
`
