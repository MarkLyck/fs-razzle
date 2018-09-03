import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import withDashboard from 'components/withDashboard'
import GenericLoader from 'components/Loading/Generic'
import LoadingError from 'components/Error/LoadingError'
import Button from 'components/Button'
import { client } from 'src/App'
import { MyAccountContainer, Title } from './styles'

const GET_LOGGED_IN_USER = gql`
  query {
    loggedInUser {
      id
    }
  }
`

const GET_USER_DETAILS = gql`
  query getUser($userID: ID!) {
    User(id: $userID) {
      name
      email
      plan
      stripeSubscription
    }
  }
`

const CANCEL_SUBSCRIPTION = gql`
  query getUser($subID: String!) {
    cancelSubscription(subID: $subID) {
      success
      error
    }
  }
`

class MyAccount extends Component {
  cancelSubscription = async stripeSubscription => {
    const subID = stripeSubscription.id
    console.log('cancelling subscription', subID)

    const { data } = await client.query({
      query: CANCEL_SUBSCRIPTION,
      variables: { subID },
    })
    console.log('status', data)
  }

  render() {
    return (
      <Query query={GET_LOGGED_IN_USER}>
        {({ loading, error, data }) => {
          if (loading) return <GenericLoader />
          if (error) return <LoadingError />
          const { loggedInUser } = data

          return (
            <Query query={GET_USER_DETAILS} variables={{ userID: loggedInUser.id }}>
              {({ loading, error, data }) => {
                if (loading) return <GenericLoader />
                if (error) return <LoadingError />

                const { User } = data

                return (
                  <div>
                    <MyAccountContainer>
                      <Title>My Account</Title>
                      <div>
                        <h4 className="user-info">{User.name}</h4>
                        <h4 className="user-info">{User.email}</h4>
                        <h4 className="user-info user-plan">{User.plan.toLowerCase()} Model</h4>
                      </div>
                    </MyAccountContainer>
                    <Button
                      variant="raised"
                      type="light"
                      color="error"
                      background="white"
                      hoverColor="error"
                      style={{ margin: '0 auto' }}
                      onClick={() => this.cancelSubscription(User.stripeSubscription)}
                    >
                      <FontAwesomeIcon icon={['far', 'times']} />
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
  }
}

export default withDashboard(MyAccount)
