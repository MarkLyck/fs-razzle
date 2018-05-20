/* eslint max-len: 0 */
import React, { Component } from 'react'
import MenuItem from './MenuItem'
import { MenuList } from './styles'

class SideMenu extends Component {
    state = { activeRoute: '' }

    setActiveRoute = route => this.setState({ activeRoute: route })

    isActive = (route) => {
        const { location } = this.props
        if (typeof window !== 'undefined') {
            if (this.state.activeRoute) return this.state.activeRoute.split('/')[0] === route
            return location.pathname.includes(route)
        }
        return false
    }

    render() {
        const { history } = this.props

        return (
            <MenuList>
                <MenuItem setActiveRoute={this.setActiveRoute} history={history} key="suggestions" icon="flask" route="suggestions" isActive={this.isActive('suggestions')}><h4>Suggestions</h4></MenuItem>
                <MenuItem setActiveRoute={this.setActiveRoute} history={history} key="portfolio" icon="chart-line" route="portfolio" isActive={this.isActive('portfolio')}><h4>Portfolio</h4></MenuItem>
                <MenuItem setActiveRoute={this.setActiveRoute} history={history} key="trades" icon="tasks" route="trades" isActive={this.isActive('trades')}><h4>Trades</h4></MenuItem>
                <MenuItem setActiveRoute={this.setActiveRoute} history={history} key="articles" icon="newspaper" route="articles" isActive={this.isActive('articles')}><h4>Articles</h4></MenuItem>
                <MenuItem setActiveRoute={this.setActiveRoute} history={history} key="admin" icon="tachometer" route="admin/panel" isActive={this.isActive('admin')}><h4>Admin</h4></MenuItem>
                <MenuItem setActiveRoute={this.setActiveRoute} history={history} key="account" icon="user" route="account" isActive={this.isActive('account')}><h4>Account</h4></MenuItem>
                <MenuItem setActiveRoute={this.setActiveRoute} history={history} key="logout" icon="sign-out-alt" route="logout"><h4>Log out</h4></MenuItem>
                <MenuItem setActiveRoute={this.setActiveRoute} history={history} key="support" icon="question-circle"><h4>Support</h4></MenuItem>
            </MenuList>
        )
    }
}

export default SideMenu
