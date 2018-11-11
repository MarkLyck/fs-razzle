import React, { Component } from 'react'
import Modal from 'react-modal'
import { modalStyles, overlayClass, Blur } from './styles'

class SlideIn extends Component {
  render() {
    const { children, isVisible, onRequestClose } = this.props
    return (
      <Modal isOpen={isVisible} onRequestClose={onRequestClose} overlayClassName={overlayClass} css={modalStyles}>
        <Blur onClick={onRequestClose} />
        {children}
      </Modal>
    )
  }
}

export default SlideIn
