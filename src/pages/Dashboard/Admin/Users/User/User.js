import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { TableCell, TableRow } from 'material-ui/Table'

const User = ({ user }) => (
    <TableRow key={user.id} onClick={() => console.log(user)}>
        <TableCell>
            <p>{user.email}</p>
        </TableCell>
        <TableCell>
            <p>{moment(user.createdAt).format('DD/MM/YY')}</p>
        </TableCell>
        <TableCell>
            {moment(user.updatedAt).fromNow()}
        </TableCell>
        <TableCell >
            test
        </TableCell>
    </TableRow>
)

User.propTypes = {
    user: PropTypes.object,
}

export default User
