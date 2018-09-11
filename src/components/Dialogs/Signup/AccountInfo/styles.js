import styled from 'react-emotion'

export const CountrySelectContainer = styled.div`
  width: 100%;
  margin: 0px;
  position: relative;

  .globe {
    color: #737373;
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
  }

  .country-select {
    width: 100%;
    &__placeholder {
      padding-left: 24px;
      margin-left: 0px;
    }
    &__input {
      padding-left: 24px;
      margin-left: -2px;
    }
    &__single-value {
      padding-left: 24px;
      margin-left: 0px;
    }
    &__control {
      background: none;
      border: 1px solid #dedede;
      border-radius: 4px;
      box-sizing: border-box;
      font-size: 0.9rem;
      padding: 8px;
      outline: none;
      width: 100%;
    }
    &__menu {
      z-index: 100;
    }
  }

  .submit-button {
    margin-bottom: 0;
  }
`

export const FooterText = styled.p`
  margin-top: 8px;
  font-size: 0.8rem;
  color: #737373;
`
