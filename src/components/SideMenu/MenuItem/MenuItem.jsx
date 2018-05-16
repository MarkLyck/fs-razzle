import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from '@fortawesome/react-fontawesome'
import { hasStorage } from 'common/utils/featureTests'
import { Button } from './styles'

class MenuItem extends Component {
    state = { isActive: false }

    componentDidMount() {
        const { isActive } = this.props
        if (isActive) { this.isActive() }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isActive) {
            this.isActive()
        } else {
            this.setState({ isActive: false })
        }
        return nextProps
    }

    isActive = () => this.setState({ isActive: true })

    clickHandler = () => {
        const { history, route, setActiveRoute } = this.props
        if (route === 'logout') {
            if (hasStorage) localStorage.removeItem('graphcoolToken')
            history.push(' /')
            return
        }
        setActiveRoute(this.props.route)
        history.push(`/dashboard/${this.props.route}`)
    }

    render() {
        const { icon, children } = this.props
        const { isActive } = this.state

        return (
            <Button onClick={this.clickHandler} className={isActive ? 'is-active' : ''}>
                <Icon icon={icon} />
                {children}
            </Button>
        )
    }
}

MenuItem.propTypes = {
    icon: PropTypes.string,
    route: PropTypes.string,
    children: PropTypes.node,
    isActive: PropTypes.bool,
    setActiveRoute: PropTypes.func,
}

export default MenuItem
