import styled from 'react-emotion'

export const CountrySelectContainer = styled.div`
  width: 100%;
  margin: 0px;

  .country-select {
    width: 100%;
    &__placeholder {
      margin-left: 0px;
    }
    &__input {
      margin-left: -2px;
    }
    &__single-value {
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
`
