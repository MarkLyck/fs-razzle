import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FieldContainer } from './styles'

class Field extends Component {
  state = {
    focused: false,
  }

  onFocus = () => this.setState({ focused: true })
  onBlur = e => {
    const { onBlur = () => {} } = this.props
    this.setState({ focused: false })
    onBlur(e)
  }

  render() {
    const { id, autoFocus, className, onChange = () => {}, type, placeholder, required, label, inputState } = this.props
    const { focused } = this.state

    return (
      <FieldContainer className={`field ${focused ? 'field--focused' : ''}`}>
        <input
          id={id}
          autoFocus={autoFocus}
          className={`input field ${className}`}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          onChange={onChange}
          type={type || 'text'}
          placeholder={placeholder}
          required={required}
        />
        <label htmlFor={id}>{label}</label>
        <div className={`baseline baseline-${inputState}`} />
      </FieldContainer>
    )
  }
}

Field.propTypes = {
  id: PropTypes.string,
  autoFocus: PropTypes.bool,
  className: PropTypes.string,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.string,
  label: PropTypes.string,
}

export default Field
