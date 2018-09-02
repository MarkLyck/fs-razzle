import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import withDashboard from 'components/withDashboard'
import Button from 'components/Button'
import { MyAccountContainer } from './styles'

const GET_LOGGED_IN_USER = gql`
  query {
    loggedInUser {
      id
    }
  }
`

const GET_USER_DETAILS = gql`
  query {
    User(id: "${localStorage.getItem('userID')}") {
      name
      email
    }
  }
`

const MyAccount = () => (
  <Query query={GET_LOGGED_IN_USER}>
    {({ loading, error, data }) => {
      if (loading) return <div>loading</div>
      if (error) return <div>error</div>

      return (
        <Query query={GET_USER_DETAILS}>
          {({ loading, error, data }) => {
            if (loading) return <div>loading</div>
            if (error) return <div>error</div>

            const user = data.User
            console.log(user)
            return (
              <div>
                <MyAccountContainer>
                  <h4>My Account</h4>
                  <div style={{ padding: '16px' }}>
                    <h4 className="user-info">{user.name}</h4>
                    <h4 className="user-info">{user.email}</h4>
                    <h4 className="user-info user-plan">{user.plan} Model</h4>
                  </div>
                </MyAccountContainer>
                <Button raised style={{ margin: '0 auto', display: 'block' }}>
                  Cancel subscription
                </Button>
              </div>
            )
          }}
        </Query>
      )
    }}
  </Query>
)

export default withDashboard(MyAccount)

/*

      
*/
