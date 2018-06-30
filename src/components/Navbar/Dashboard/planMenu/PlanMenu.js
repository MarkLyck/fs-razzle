import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PlanContext from 'common/Contexts/PlanContext'
import Button from 'components/Button'
import Menu, { MenuItem } from 'material-ui/Menu'
import { hasStorage } from 'common/utils/featureTests'
import { SelectedPlanName } from './styles'

class PlanButtons extends Component {
  state = { anchorEl: null }

  setPlan = (setPlan, plan) => {
    this.handleClose()
    setPlan(plan)
    if (hasStorage) localStorage.setItem('selectedPlan', plan)
  }

  handleClick = event => this.setState({ anchorEl: event.currentTarget })
  handleClose = () => this.setState({ anchorEl: null })

  render() {
    const { anchorEl } = this.state

    return (
      <PlanContext.Consumer>
        {({ planName, setPlan }) => (
          <React.Fragment>
            <Button
              color="primary"
              variant="raised"
              type="light"
              aria-owns={anchorEl ? 'plan-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <SelectedPlanName>{planName ? planName.toLowerCase() : ''}</SelectedPlanName>
              <FontAwesomeIcon icon="angle-down" style={{ marginRight: 0 }} />
            </Button>
            <Menu id="plan-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
              <MenuItem onClick={() => this.setPlan(setPlan, 'ENTRY')}>Entry</MenuItem>
              <MenuItem onClick={() => this.setPlan(setPlan, 'PREMIUM')}>Premium</MenuItem>
              <MenuItem onClick={() => this.setPlan(setPlan, 'BUSINESS')}>Business</MenuItem>
              <MenuItem onClick={() => this.setPlan(setPlan, 'FUND')}>Fund</MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PlanContext.Consumer>
    )
  }
}

PlanButtons.propTypes = {
  selectedPlan: PropTypes.string,
  actions: PropTypes.object,
}

export default PlanButtons
