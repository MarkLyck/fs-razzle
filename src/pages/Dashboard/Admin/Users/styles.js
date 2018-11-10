import styled from 'react-emotion'
import { Table } from 'components/Table'
import { boxStyle } from 'components/Box'

export const UsersContainer = styled(Table)`
  ${boxStyle};
  display: table;
  margin: 16px;
  width: calc(100% - 32px);
`
