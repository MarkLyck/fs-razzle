import React from 'react'
import styled from 'react-emotion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Table = styled.table`
  width: 100%;
  margin-top: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
  background: #fcfcfc;
`

export const TableHead = styled.thead``

export const TableBody = styled.tbody``

export const TableRow = styled.tr`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
`

const THCell = styled.th`
  padding: 16px;
  white-space: nowrap;
  position: relative;
  color: ${props => props.theme.colors.gray};

  .tooltip {
    position: relative;
  }

  .tooltip-icon {
    margin-left: 8px;
  }

  ${props =>
    props.tooltip
      ? `
    .tooltip:hover {
        color: ${props.theme.colors.primary};
        &::before {
            content: '${props.tooltip}';
            position: absolute;
            top: -64px;
            left: 0;
            transform: translateX(calc(-100% + 100px));
            background: white;
            color: ${props.theme.colors.black};
            padding: 16px;
            border-radius: 4px;
            box-shadow: 0 2px 8px rgba(0,0,0,.16);
        }
        &::after {
            content: '';
            position: absolute;
            top: -15px;
            left: 32px;
            width: 12px;
            height: 12px;
            background: #fff;
            box-shadow: 2px 2px 1px rgba(0,0,0,.08);
            transform: rotate(45deg);
        }
    }
    `
      : ''};
`

export const TableHeadCell = ({ className, tooltip, children, ...rest }) => (
  <THCell className={className} tooltip={tooltip} {...rest}>
    <p className="tooltip">
      {children}
      {tooltip ? <FontAwesomeIcon className="tooltip-icon" icon="question-circle" /> : ''}
    </p>
  </THCell>
)

export const TableCell = styled.td`
  padding: 12px 16px;
  font-weight: 400;
  color: ${props => props.theme.colors.black};
`
