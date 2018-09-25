import React from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import withDashboard from 'components/withDashboard'
import { Table, TableBody, TableCell, TableHead, TableRow } from 'components/Table'
import LoadingError from 'components/Error/LoadingError'
import GenericLoader from 'components/Loading/Generic'
import User from './User'
// import CreateUser from './CreateUser'
import { UsersContainer } from './styles'

const USERS_QUERY = gql`
  query {
    allUsers {
      id
      createdAt
      updatedAt
      name
      email
      type
    }
  }
`

const UserList = ({ allUsers }) => (
  <Query query={USERS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <GenericLoader />
      if (error) return <LoadingError error={error} />

      return (
        <UsersContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Email</TableCell>
                <TableCell>Signed up</TableCell>
                <TableCell>Last seen</TableCell>
                <TableCell>Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{data.allUsers.map(user => <User user={user} key={user.id} />)}</TableBody>
          </Table>
          {/* <CreateUser /> */}
        </UsersContainer>
      )
    }}
  </Query>
)

UserList.propTypes = {
  allUsers: PropTypes.array,
}

export default withDashboard(UserList)
