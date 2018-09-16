import React from 'react'
import PropTypes from 'prop-types'
import { format, distanceInWordsStrict } from 'date-fns'
import { TableCell, TableRow } from 'components/Table'

const User = ({ user }) => (
  <TableRow key={user.id} onClick={() => console.log(user)}>
    <TableCell>
      <p>{user.email}</p>
    </TableCell>
    <TableCell>
      <p>{format(user.createdAt, 'DD/MM/YY')}</p>
    </TableCell>
    <TableCell>{distanceInWordsStrict(new Date(), user.updatedAt)} ago</TableCell>
    <TableCell>test</TableCell>
  </TableRow>
)

User.propTypes = {
  user: PropTypes.object,
}

export default User
