import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AdminButtonsContainer, AdminButton, ButtonTitle } from './styles'

class AdminButtons extends Component {
  state = { activeButton: 'panel' }

  componentDidMount() {
    const { route } = this.props
    this.setState({ activeButton: route.split('/')[route.split('/').length - 1] })
  }

  navigateTo = route => {
    this.setState({ activeButton: route.split('/')[route.split('/').length - 1] })
    this.props.history.push(route)
  }

  render() {
    const { activeButton } = this.state

    return (
      <AdminButtonsContainer>
        <AdminButton
          color={activeButton === 'panel' || activeButton === 'admin' ? 'white' : 'primary'}
          variant="raised"
          type={activeButton === 'panel' || activeButton === 'admin' ? 'dark' : 'light'}
          onClick={() => this.navigateTo('/dashboard/admin/panel')}
        >
          <FontAwesomeIcon icon="chart-line" />
          <ButtonTitle>Panel</ButtonTitle>
        </AdminButton>
        <AdminButton
          color={activeButton === 'users' ? 'white' : 'primary'}
          variant="raised"
          type={activeButton === 'users' ? 'dark' : 'light'}
          onClick={() => this.navigateTo('/dashboard/admin/users')}
        >
          <FontAwesomeIcon icon="users" />
          <ButtonTitle>Users</ButtonTitle>
        </AdminButton>
        <AdminButton
          color={activeButton === 'api' ? 'white' : 'primary'}
          variant="raised"
          type={activeButton === 'api' ? 'dark' : 'light'}
          onClick={() => this.navigateTo('/dashboard/admin/api')}
        >
          <FontAwesomeIcon icon="database" />
          <ButtonTitle>API</ButtonTitle>
        </AdminButton>
        <AdminButton
          color={activeButton === 'newArticle' ? 'white' : 'primary'}
          variant="raised"
          type={activeButton === 'newArticle' ? 'dark' : 'light'}
          onClick={() => this.navigateTo('/dashboard/admin/newArticle')}
        >
          <FontAwesomeIcon icon="pencil" />
          <ButtonTitle>New Article</ButtonTitle>
        </AdminButton>
      </AdminButtonsContainer>
    )
  }
}

AdminButtons.propTypes = {
  route: PropTypes.string,
}

export default AdminButtons
