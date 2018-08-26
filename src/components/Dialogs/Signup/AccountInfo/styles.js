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
      border: none;
      border-bottom: 1px solid #cfd7df;
      border-radius: 0;

      &--is-focused {
        border: none;
        border-bottom: 1px solid ${props => props.theme.colors.primary};
        box-shadow: none;
      }
    }
    &__menu {
      z-index: 100;
    }
  }

  .country-select-label {
    position: relative;
    bottom: 0;
    color: hsl(0, 0%, 50%);
    font-family: Quicksand, Open Sans, Segoe UI, sans-serif;
    font-size: 13px;
    font-weight: 500;
  }
`
