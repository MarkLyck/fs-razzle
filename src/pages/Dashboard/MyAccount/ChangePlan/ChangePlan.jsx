import React, { Component } from 'react'
import Modal from 'react-modal'
import { hasStorage } from 'common/utils/featureTests'
import gql from 'graphql-tag'
import { client } from 'src/App'
import Plan from './Plan'
import { ChangePlanContainer, ChangePlanPaper, LargeFlatButton, modalStyles, overlayClass } from './styles'

const CREATE_SUBSCRIPTION = gql`
  query createSubscription($customerID: String!, $plan: String!, $taxPercent: Float) {
    createSubscription(customerID: $customerID, plan: $plan, taxPercent: $taxPercent) {
      subscription
    }
  }
`

const CANCEL_SUBSCRIPTION = gql`
  query cancelSubscription($subID: String!) {
    cancelSubscription(subID: $subID) {
      stripeSubscription
    }
  }
`

const plans = [
  {
    id: 'ENTRY',
    name: 'Entry',
    price: 50,
    cycle: 'monthly',
  },
  {
    id: 'PREMIUM',
    name: 'Premium',
    price: 100,
    cycle: 'monthly',
  },
  {
    id: 'BUSINESS',
    name: 'Business',
    price: 20000,
    cycle: 'annually',
  },
  {
    id: 'FUND',
    name: 'Fund',
    price: 140000,
    cycle: 'annually',
  },
]

class ChangePlan extends Component {
  state = {
    selectedPlan: { id: this.props.currentPlan, price: 50 },
    showConfirmation: false,
  }

  selectPlan = plan => {
    if (hasStorage) localStorage.setItem('selectedPlan', plan.id)
    this.setState({ selectedPlan: plan })
  }

  toggleModal = () => this.setState({ showConfirmation: !this.state.showConfirmation })

  changePlan = async () => {
    const { userID, stripeCustomer, updateUser, taxPercent, currentPlan, oldSubscription, refetchUser } = this.props
    const { selectedPlan } = this.state

    if (selectedPlan.id === currentPlan) return

    // close modal
    this.toggleModal()

    // Create new subscription
    const { data } = await client.query({
      query: CREATE_SUBSCRIPTION,
      variables: { customerID: stripeCustomer, taxPercent, plan: selectedPlan.id },
    })
    console.log('stripe data', data)
    const { subscription } = data.createSubscription
    // check that subscription was actually successfull.
    if (!subscription || !subscription.id) return
    // update user with new subscription
    updateUser({
      variables: {
        id: userID,
        stripeSubscription: subscription,
        taxPercent,
        plan: selectedPlan.id,
        type: 'subscriber',
      },
    })
    // cancel old subscription
    await client.query({
      query: CANCEL_SUBSCRIPTION,
      variables: { subID: oldSubscription.id, cancel_at_period_end: false },
    })
    // refetch user details for MyAccount page to update.
    refetchUser()
  }

  render() {
    const { currentPlan } = this.props
    const { selectedPlan, showConfirmation } = this.state

    return (
      <ChangePlanContainer>
        <h4 className="title">Change your subscription</h4>
        <ChangePlanPaper>
          {plans.map(plan => (
            <Plan
              name={plan.name}
              key={plan.name}
              price={plan.price}
              cycle={plan.cycle}
              currentPlan={currentPlan}
              selectedPlan={selectedPlan.id}
              onClick={this.selectPlan.bind(null, plan)}
            />
          ))}
          <LargeFlatButton
            disabled={selectedPlan.id === currentPlan}
            onClick={this.toggleModal}
            color="secondary"
            fontWeight="100"
          >
            Next
          </LargeFlatButton>
        </ChangePlanPaper>
        <Modal
          isOpen={showConfirmation}
          onRequestClose={this.toggleModal}
          overlayClassName={overlayClass}
          css={modalStyles}
        >
          <h3 className="title">Confirm plan change</h3>
          <p>
            You will be charged <span className="bold">${selectedPlan.price.toLocaleString()}</span> to the card on
            file.
          </p>
          <LargeFlatButton color="primary" align="center" onClick={this.changePlan}>
            Subscribe for ${selectedPlan.price.toLocaleString()} {selectedPlan.cycle}
          </LargeFlatButton>
        </Modal>
      </ChangePlanContainer>
    )
  }
}

export default ChangePlan
