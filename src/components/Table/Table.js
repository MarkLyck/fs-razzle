import styled from 'react-emotion'

export const Table = styled.table`
    width: 100%;
    margin-top: 16px;
    box-shadow: 0 2px 8px rgba(0,0,0,.16);
    background: #fcfcfc;
`

export const TableHead = styled.thead``

export const TableBody = styled.tbody``

export const TableRow = styled.tr`
    width: 100%;
    border-bottom: 1px solid ${props => props.theme.colors.lightGray};
`

export const TableHeadCell = styled.th`
    padding: 16px
`

export const TableCell = styled.td`
    padding: 12px 16px;
    font-weight: 400;
    color: ${props => props.theme.colors.black};
`