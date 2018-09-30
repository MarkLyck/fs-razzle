import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query, Mutation } from 'react-apollo'
import withDashboard from 'components/withDashboard'
import GenericLoader from 'components/Loading/Generic'
import LoadingError from 'components/Error/LoadingError'
import ChangePlan from './ChangePlan'
import CancelSubscription from './CancelSubscription'
import ReactivateSubscription from './ReactivateSubscription'
import { MyAccountContainer, Title } from './styles'

const GET_LOGGED_IN_USER = gql`
  query {
    loggedInUser {
      id
      name
      email
      plan
      stripeCustomer
      stripeSubscription
      taxPercent
      billingPeriod
    }
  }
`

export const UPDATE_USER = gql`
  mutation updateUser($id: ID!, $stripeSubscription: Json, $plan: String, $type: String) {
    updateUser(id: $id, stripeSubscription: $stripeSubscription, plan: $plan, type: $type) {
      id
      name
      email
      plan
      stripeSubscription
    }
  }
`

class MyAccount extends Component {
  render() {
    return (
      <Query query={GET_LOGGED_IN_USER}>
        {({ loading, error, data, refetch }) => {
          if (loading) return <GenericLoader />
          let User = data.loggedInUser
          if (error || !User || !User.id) return <LoadingError error={error} />

          return (
            <Mutation mutation={UPDATE_USER}>
              {(updateUser, { data }) => {
                if (data) User = data.updateUser

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
                    <ChangePlan
                      currentPlan={User.plan}
                      stripeCustomer={User.stripeCustomer}
                      oldSubscription={User.stripeSubscription}
                      taxPercent={User.taxPercent}
                      billingPeriod={User.billingPeriod}
                      userID={User.id}
                      updateUser={updateUser}
                      refetchUser={refetch}
                    />
                    <CancelSubscription
                      stripeSubscription={User.stripeSubscription}
                      updateUser={updateUser}
                      userID={User.id}
                    />
                    <ReactivateSubscription
                      stripeSubscription={User.stripeSubscription}
                      updateUser={updateUser}
                      userID={User.id}
                    />
                  </div>
                )
              }}
            </Mutation>
          )
        }}
      </Query>
    )
  }
}

export default withDashboard(MyAccount)
