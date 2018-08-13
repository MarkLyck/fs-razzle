import styled from 'react-emotion'

export const FieldContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50px;

  .stripe-input {
    &:hover {
      cursor: text;
    }
  }

  &:nth-child(2) {
    margin-left: 16px;
  }
`
