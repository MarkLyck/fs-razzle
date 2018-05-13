import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import Menu, { MenuItem } from 'material-ui/Menu'
import { hasStorage } from 'common/utils/featureTests'
import { SelectedPlanName } from './styles'

class PlanButtons extends Component {
    state = { open: false, anchorEl: null }

    setPlan = (plan) => {
        const { actions } = this.props
        if (hasStorage) localStorage.setItem('selectedPlan', plan)
        actions.selectPlan(plan)
        this.setState({ open: false })
    }

    toggleMenu = event => this.setState({ open: !this.state.open, anchorEl: event.currentTarget })

    render() {
        const { selectedPlan } = this.props
        return (
            <span>
                <Button
                    className="plan-menu-button"
                    color="primary"
                    raised
                    aria-owns={this.state.open ? 'plan-menu' : null}
                    aria-haspopup="true"
                    onClick={this.toggleMenu}
                >
                    <SelectedPlanName>{selectedPlan || 'Entry'}</SelectedPlanName>
                    <i className="fa fa-angle-down" />
                </Button>
                <Menu
                    id="plan-menu"
                    anchorEl={this.state.anchorEl}
                    open={this.state.open}
                    onRequestClose={this.toggleMenu}
                >
                    <MenuItem onClick={() => this.setPlan('entry')}>Entry</MenuItem>
                    <MenuItem onClick={() => this.setPlan('premium')}>Premium</MenuItem>
                    <MenuItem onClick={() => this.setPlan('business')}>Business</MenuItem>
                    <MenuItem onClick={() => this.setPlan('fund')}>Fund</MenuItem>
                </Menu>
            </span>
        )
    }
}

PlanButtons.propTypes = {
    selectedPlan: PropTypes.string,
    actions: PropTypes.object,
}

export default PlanButtons
