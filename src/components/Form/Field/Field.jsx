import React from 'react'
import PropTypes from 'prop-types'
import { FieldContainer } from './styles'

const Field = ({
  id,
  autoFocus,
  className,
  onBlur,
  onFocus,
  onChange,
  type,
  placeholder,
  required,
  label,
  inputState,
  ...otherProps
}) => (
  <FieldContainer className="field">
    <input
      id={id}
      autoFocus={autoFocus}
      className={`input ${className}`}
      onBlur={onBlur}
      //   onFocus={() => onFocus(id)}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      required={required}
    />
    <label htmlFor={id}>{label}</label>
    <div className={`baseline baseline-${inputState}`} />
  </FieldContainer>
)

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
