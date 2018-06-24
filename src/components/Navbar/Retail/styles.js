import styled from 'react-emotion'

export const NavBar = styled.div`
  top: 0;
  left: auto;
  right: 0;
  position: fixed;
  background: #fff;
  height: 64px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 32px;
  box-sizing: border-box;
  z-index: 10;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

export const NavLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  & button {
    margin: 0 8px;
  }
`
