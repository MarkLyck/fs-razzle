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

  button {
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

  .stripe-input {
    border: 1px solid #dedede;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 0.9rem;
    margin-bottom: 16px;
    padding: 16px;
    outline: none;
    width: 100%;
  }

  button {
    -webkit-animation: 1ms void-animation-out;
  }

  button {
    display: block;
    width: 100%;
    height: 40px;
    margin: 0 16px;
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
