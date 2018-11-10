import React, { Component } from 'react'
import gql from 'graphql-tag'
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'components/Button'
import { client } from 'src/App'
import { StatusLine } from './styles'

const CANCEL_SUBSCRIPTION = gql`
  query cancelSubscription($subID: String!) {
    cancelSubscription(subID: $subID) {
      stripeSubscription
    }
  }
`

class CancelSubscription extends Component {
  cancelSubscription = async (sub, updateUser, userID) => {
    const subID = sub.id

    const { data } = await client.query({
      query: CANCEL_SUBSCRIPTION,
      variables: { subID },
    })
    const stripeSubscription = data.cancelSubscription.stripeSubscription
    updateUser({ variables: { id: userID, stripeSubscription } })
  }

  render() {
    const { stripeSubscription, updateUser, userID } = this.props
    if (!stripeSubscription || !stripeSubscription.cancel_at_period_end)
      return <p style={{ textAlign: 'center' }}>Please contact support if you'd like to cancel your subscription</p>
    const nowInUnixSeconds = Date.now() / 1000

    return (
      <React.Fragment>
        {stripeSubscription.cancel_at_period_end &&
          stripeSubscription.current_period_end > nowInUnixSeconds && (
            <StatusLine>
              Your subscription is ending on:{' '}
              {format(new Date(stripeSubscription.current_period_end * 1000), 'MMMM Do YYYY')}
            </StatusLine>
          )}
        {stripeSubscription.ended_at && (
          <StatusLine>
            Your subscription ended on: {format(new Date(stripeSubscription.ended_at * 1000), 'MMMM Do YYYY')}
          </StatusLine>
        )}

        {!stripeSubscription.cancel_at_period_end && (
          <Button
            variant="raised"
            type="light"
            color="error"
            background="white"
            hoverColor="error"
            style={{ margin: '0 auto 16px' }}
            onClick={() => this.cancelSubscription(stripeSubscription, updateUser, userID)}
          >
            <FontAwesomeIcon icon={['far', 'times']} />
            Cancel subscription
          </Button>
        )}
      </React.Fragment>
    )
  }
}

export default CancelSubscription
