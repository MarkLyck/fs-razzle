import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from 'components/Button'
import { AdminButtonsContainer } from './styles'

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
        <Button
          color={activeButton === 'panel' || activeButton === 'admin' ? 'white' : 'primary'}
          variant="raised"
          type={activeButton === 'panel' || activeButton === 'admin' ? 'dark' : 'light'}
          onClick={() => this.navigateTo('/dashboard/admin/panel')}
        >
          Panel
        </Button>
        <Button
          color={activeButton === 'users' ? 'white' : 'primary'}
          variant="raised"
          type={activeButton === 'users' ? 'dark' : 'light'}
          onClick={() => this.navigateTo('/dashboard/admin/users')}
        >
          Users
        </Button>
        <Button
          color={activeButton === 'api' ? 'white' : 'primary'}
          variant="raised"
          type={activeButton === 'api' ? 'dark' : 'light'}
          onClick={() => this.navigateTo('/dashboard/admin/api')}
        >
          API
        </Button>
        <Button
          color={activeButton === 'newArticle' ? 'white' : 'primary'}
          variant="raised"
          type={activeButton === 'newArticle' ? 'dark' : 'light'}
          onClick={() => this.navigateTo('/dashboard/admin/newArticle')}
        >
          New Article
        </Button>
      </AdminButtonsContainer>
    )
  }
}

AdminButtons.propTypes = {
  route: PropTypes.string,
}

export default AdminButtons
