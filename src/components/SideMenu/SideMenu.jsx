/* eslint max-len: 0 */
import React, { Component } from 'react'
import MenuItem from './MenuItem'
import { MenuList } from './styles'

const routes = [
    { name: 'suggestions', icon: 'flask' },
    { name: 'portfolio', icon: 'chart-line' },
    { name: 'trades', icon: 'tasks' },
    { name: 'articles', icon: 'newspaper' },
    { name: 'admin', icon: 'tachometer' },
    { name: 'account', icon: 'user' },
    { name: 'logout', icon: 'sign-out-alt' },
    { name: 'support', icon: 'question-circle' },
]

class SideMenu extends Component {
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.location) {
            const route = routes.reduce((acc, curr, i) => {
                if (nextProps.location.pathname.includes(curr.name)) {
                    acc = curr.name
                }
                return acc
            }, '')
            return { activeRoute: route }
        }
    }
    state = { activeRoute: '' }

    setActiveRoute = route => this.setState({ activeRoute: route })

    render() {
        const { history } = this.props
        const { activeRoute } = this.state

        return (
            <MenuList>
                {routes.map(route => <MenuItem
                    setActiveRoute={this.setActiveRoute}
                    history={history}
                    key={route.name}
                    icon={route.icon}
                    route={route.name}
                    isActive={route.name === activeRoute}
                />)}
            </MenuList>
        )
    }
}

export default SideMenu
