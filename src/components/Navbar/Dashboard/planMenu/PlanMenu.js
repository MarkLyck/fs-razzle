import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PlanContext from 'common/Contexts/PlanContext'
import Button from 'components/Button'
import DropDownMenu from 'components/DropDownMenu'
import { hasStorage } from 'common/utils/featureTests'
import { SelectedPlanName } from './styles'

class PlanButtons extends Component {
  state = {
    anchorEl: null,
    showMenu: false,
  }

  setPlan = (setPlan, plan) => {
    setPlan(plan)
    if (hasStorage) localStorage.setItem('selectedPlan', plan)
  }

  openMenu = event => {
    this.setState({ anchorEl: event.currentTarget })
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu)
    })
  }
  closeMenu = event => {
    this.setState({ anchorEl: null, showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu)
    })
  }

  render() {
    const { anchorEl, showMenu } = this.state

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
              onClick={this.openMenu}
            >
              <SelectedPlanName>{planName ? planName.toLowerCase() : ''}</SelectedPlanName>
              <FontAwesomeIcon icon="angle-down" style={{ marginRight: 0 }} />
            </Button>
            <DropDownMenu open={showMenu}>
              <button onClick={() => this.setPlan(setPlan, 'ENTRY')}>Entry</button>
              <button onClick={() => this.setPlan(setPlan, 'PREMIUM')}>Premium</button>
              <button onClick={() => this.setPlan(setPlan, 'BUSINESS')}>Business</button>
              <button onClick={() => this.setPlan(setPlan, 'FUND')}>Fund</button>
            </DropDownMenu>
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
