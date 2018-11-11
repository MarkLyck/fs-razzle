import styled from 'react-emotion'
import { css } from 'emotion'
import mq from 'common/utils/mq'
import Beside from 'components/Section/Beside'
import { boxStyle } from 'components/Box'

export const BesideContainer = styled.div`
  ${Beside} {
    align-items: center;
    ${mq.large(css`
      flex-direction: column;
      > div {
        width: 100%;
        max-width: 100%;
        margin: 0;
      }
    `)};
  }
`

export const Screenshot = styled.img`
  ${boxStyle};
  width: 100%;
  height: auto;
  transition: transform 0.5s;
  margin-bottom: 32px;
  margin-top: 24px;

  &:hover {
    transform: scale(1.05);
  }
`

export const Table = styled.table`
  ${boxStyle};
  display: table;
  width: 100%;
  margin-top: 16px;

  ${mq.small(css`
    .purchase-price,
    .purchase-price-header {
      display: none;
    }
  `)};
  @media (max-width: 480px) {
    .sales-price,
    .sales-price-header {
      display: none;
    }
  }
`

export const TableRow = styled.tr`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
`

export const TableBody = styled.tbody`
  ${TableRow}:hover {
    border-color: ${props => props.theme.colors.primary};
    .stock-name {
      color: ${props => props.theme.colors.primary};
    }
  }

  .percent-return.positive {
    color: ${props => props.theme.colors.secondary};
  }
  .percent-return.positive::before {
    content: '+';
  }
  .percent-return.negative {
    color: ${props => props.theme.colors.error};
  }
`

export const TableHeadCell = styled.th`
  padding: 16px;
`

export const TableCell = styled.td`
  padding: 12px 16px;
  font-weight: 400;
  color: ${props => props.theme.colors.black};
`

export const StockName = styled.span`
  font-weight: 500;
`
