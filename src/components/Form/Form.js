import styled from 'react-emotion'
import { keyframes } from 'emotion'

// This returns a animation
const formError = keyframes`
  0% {
      margin-top: 0;
  }
  100% {
      margin-top: 48px;
  }
`

export default styled.form`
  font-family: Quicksand, Open Sans, Segoe UI, sans-serif;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: visible;
  padding: 0 16px;

  ${'' /* .field {
    width: 100%;

    &--focused {
      label {
        color: ${props => props.theme.colors.primary};
      }
      .baseline {
        background: ${props => props.theme.colors.primary};
      }
    }
  }

  .field.half-width {
    width: 50%;
  }

  .field.quarter-width {
    width: calc(25% - 10px);
  }

  .baseline {
    position: absolute;
    width: 100%;
    height: 1px;
    left: 0;
    bottom: 0;
    background-color: #cfd7df;
    transition: background-color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  label {
    position: absolute;
    width: 100%;
    left: 8px;
    bottom: 8px;
    z-index: 0;
    color: hsl(0, 0%, 50%);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transform-origin: 0 50%;
    cursor: text;
    transition-property: color, transform;
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .input {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    z-index: 1;
    padding-bottom: 7px;
    padding-left: 8px;
    font-size: 16px;
    color: #32325d;
    background-color: transparent;
  }

  .input::-webkit-input-placeholder {
    color: transparent;
    transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .input::-moz-placeholder {
    color: transparent;
    transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .input:-ms-input-placeholder {
    color: transparent;
    transition: color 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .input.StripeElement {
    opacity: 0;
    transition: opacity 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    will-change: opacity;
  }

  .input.focused,
  .input:not(.empty) {
    opacity: 1;
  }

  .input.focused::-webkit-input-placeholder,
  .input:not(.empty)::-webkit-input-placeholder {
    color: hsl(0, 0%, 50%);
  }

  .input.focused::-moz-placeholder,
  .input:not(.empty)::-moz-placeholder {
    color: hsl(0, 0%, 50%);
  }

  .input.focused:-ms-input-placeholder,
  .input:not(.empty):-ms-input-placeholder {
    color: hsl(0, 0%, 50%);
  }

  .input.focused + label,
  .input:not(.empty) + label {
    transform: scale(0.85) translateY(-25px);
    cursor: default;
  }

  .input.focused + label {
    color: ${props => props.theme.colors.primary};
  }

  .input.invalid + label {
    color: ${props => props.theme.colors.warning};
  } */} button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    border-style: none;
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: ${props => props.theme.colors.primary};
    transition: background-color 100000000s;
    -webkit-animation: 1ms void-animation-out;
  }

  .StripeElement--webkit-autofill {
    background: transparent !important;
  }

  ${'' /* input, */} button {
    -webkit-animation: 1ms void-animation-out;
  }

  button {
    display: block;
    width: 100%;
    height: 40px;
    margin: 8px 16px 0;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 4px;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
  }

  .input-error {
    color: red;
  }

  .success .icon .border {
    stroke: #abe9d2;
  }

  .success .icon .checkmark {
    stroke: ${props => props.theme.colors.primary};
  }

  .success .title {
    color: #32325d;
    font-size: 16px !important;
  }

  .success .message {
    color: #8898aa;
    font-size: 13px !important;
  }

  .success .reset path {
    fill: ${props => props.theme.colors.primary};
  }

  .beside {
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 500;
    width: 100%;
    margin: 0 auto;
    .price.semi-bold {
      font-weight: 600;
      text-decoration: underline;
    }
  }

  .disclaimer {
    margin-top: 16px;
    a {
      outline: none;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
  .form-error {
    animation: ${formError} 0.5s ease;
    margin-top: 48px;
  }
`
