import styled from 'react-emotion'
import { darken } from 'polished'

export const MenuContainer = styled.div`
  position: absolute;
  top: 12px;
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14),
    0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  width: 100px;
  z-index: 11;

  button {
    border: none;
    width: 100%;
    padding: 16px;
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.87);
    text-align: left;

    &:hover {
      background: ${darken(0.1, 'white')};
    }
  }
`
