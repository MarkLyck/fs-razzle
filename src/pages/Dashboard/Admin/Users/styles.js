import styled from 'react-emotion'
import { Table } from 'components/Table'
import { boxStyle } from 'components/Box'

export const UsersContainer = styled(Table)`
  ${boxStyle};
  display: table;
  margin: 16px;
  width: calc(100% - 32px);

  @media (max-width: 660px) {
    td:last-child {
      display: none;
    }
  }
  @media (max-width: 540px) {
    td:nth-child(2) {
      display: none;
    }
    td:first-child {
      p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        max-width: 180px;
      }
    }
  }
  @media (max-width: 380px) {
    td:nth-child(3) {
      display: none;
    }
    td:first-child {
      p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        max-width: 240px;
      }
    }
  }
`
