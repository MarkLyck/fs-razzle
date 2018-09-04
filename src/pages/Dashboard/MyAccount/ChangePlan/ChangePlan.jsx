import React, { Component } from 'react'
import { hasStorage } from 'common/utils/featureTests'
import Plan from './Plan'
import { ChangePlanContainer, ChangePlanPaper } from './styles'

const plans = [
  {
    name: 'Entry',
    price: 50,
    cycle: 'monthly',
  },
  {
    name: 'Premium',
    price: 100,
    cycle: 'monthly',
  },
  {
    name: 'Business',
    price: 20000,
    cycle: 'annually',
  },
  {
    name: 'Fund',
    price: 140000,
    cycle: 'annually',
  },
]

class ChangePlan extends Component {
  state = {
    selectedPlan: this.props.currentPlan,
  }

  selectPlan = plan => {
    console.log('plan', plan)
    if (hasStorage) localStorage.setItem('selectedPlan', plan)
    this.setState({ selectedPlan: plan })
  }

  render() {
    const { currentPlan } = this.props
    const { selectedPlan } = this.state

    return (
      <ChangePlanContainer>
        Change your subscription
        <ChangePlanPaper>
          {plans.map(plan => (
            <Plan
              name={plan.name}
              key={plan.name}
              price={plan.price}
              cycle={plan.cycle}
              currentPlan={currentPlan}
              selectedPlan={selectedPlan}
              onClick={this.selectPlan.bind(null, plan.name.toUpperCase())}
            />
          ))}
        </ChangePlanPaper>
      </ChangePlanContainer>
    )
  }
}

export default ChangePlan
