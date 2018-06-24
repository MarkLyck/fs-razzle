import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from '@fortawesome/react-fontawesome'
import { hasStorage } from 'common/utils/featureTests'
import { Button } from './styles'

class MenuItem extends Component {
  clickHandler = () => {
    const { history, route, setActiveRoute } = this.props
    if (route === 'logout') {
      if (hasStorage) localStorage.removeItem('graphcoolToken')
      history.push('/')
      return
    }
    setActiveRoute(this.props.route)
    history.push(`/dashboard/${this.props.route}`)
  }

  render() {
    const { route, icon, isActive } = this.props

    return (
      <Button onClick={this.clickHandler} isActive={isActive}>
        <Icon icon={icon} />
        <h4>{route}</h4>
      </Button>
    )
  }
}

MenuItem.propTypes = {
  icon: PropTypes.string,
  route: PropTypes.string,
  isActive: PropTypes.bool,
  setActiveRoute: PropTypes.func,
}

export default MenuItem
