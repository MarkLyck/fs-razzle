import styled from 'react-emotion'

export const FieldContainer = styled.div`
  position: relative;
  width: 100%;
  height: 50px;

  svg {
    color: #737373;
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
  }

  .stripe-input {
    padding-left: 40px;
    &:hover {
      border-color: hsl(0, 0%, 70%);
      cursor: text;
    }
  }

  &:nth-child(2) {
    margin-left: 16px;
  }
`
