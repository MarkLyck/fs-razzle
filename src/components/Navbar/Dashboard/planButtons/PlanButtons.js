import React from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import { hasStorage } from 'common/featureTests'
import { ButtonContainer } from './styles'

const setPlan = (plan, selectPlan) => {
    if (hasStorage) localStorage.setItem('selectedPlan', plan)
    selectPlan(plan)
}

const PlanButtons = ({ selectedPlan, actions }) => (
    <ButtonContainer key="plan-buttons">
        <Button
            color="primary"
            raised={selectedPlan === 'entry'}
            onClick={() => setPlan('entry', actions.selectPlan)}
        >
            Entry
        </Button>
        <Button
            color="primary"
            raised={selectedPlan === 'premium'}
            onClick={() => setPlan('premium', actions.selectPlan)}
        >
            Premium
        </Button>
        <Button
            color="primary"
            raised={selectedPlan === 'business'}
            onClick={() => setPlan('business', actions.selectPlan)}
        >
            Business
        </Button>
        <Button
            color="primary"
            raised={selectedPlan === 'fund'}
            onClick={() => setPlan('fund', actions.selectPlan)}
        >
            Fund
        </Button>
    </ButtonContainer>
)

PlanButtons.propTypes = {
    selectedPlan: PropTypes.string,
    actions: PropTypes.object,
}

export default PlanButtons
