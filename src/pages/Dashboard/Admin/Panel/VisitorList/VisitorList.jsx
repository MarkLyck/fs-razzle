import React from 'react'
import PropTypes from 'prop-types'
import { Table, TableBody, TableHeadCell, TableHead, TableRow } from 'components/Table'
import Visitor from './Visitor'
import { ContainerStyle } from './styles'

const VisitorList = ({ visitors }) => (
  <Table className={ContainerStyle}>
    <TableHead>
      <TableRow>
        <TableHeadCell>Location</TableHeadCell>
        <TableHeadCell>referrer</TableHeadCell>
        <TableHeadCell>Visited</TableHeadCell>
        <TableHeadCell>Device</TableHeadCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {visitors.map(visitor => (
        <Visitor visitor={visitor} key={visitor.id} />
      ))}
    </TableBody>
  </Table>
)

VisitorList.propTypes = {
  visitors: PropTypes.array,
}

export default VisitorList
