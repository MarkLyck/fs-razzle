import React, { Component } from 'react'
import { MenuContainer } from './styles'

class DropDownMenu extends Component {

  

  render() {
    const { open, children } = this.props
    if (!open) return null

    return (
      <MenuContainer
        ref={element => {
          this.dropdownMenu = element
        }}
      >
        {children}
      </MenuContainer>
    )
  }
}

export default DropDownMenu
