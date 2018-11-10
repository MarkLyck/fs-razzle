import styled from 'react-emotion'
import { css } from 'emotion'

export const ModalContainer = styled.div`
  padding: 24px 16px;
`

export const modalStyles = `
  background: white;
  width: 360px;
  height: auto;
  outline: none;
  z-index: 11;
`

export const fullScreenModalStyles = `
  background: white;
  width: 100%;
  height: 100%;
  outline: none;
  z-index: 11;
  overflow-y: scroll;
`

export const LegalContainer = styled.div`
  padding: 32px;
  overflow-y: auto;
  margin-top: 64px;
  p {
    margin-bottom: 24px;
  }
  h3 {
    font-weight: 500;
    margin-bottom: 8px;
  }
`

export const overlayClass = css`
  z-index: 10;
  background rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const AppBar = styled.div`
  background: ${props => props.theme.colors.white};
  width: 100%;
  height: 72px;
  padding: 0 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);

  h2 {
    color: ${props => props.theme.colors.primary};
    font-size: 1.2rem;
  }

  button {
    background: none;
    border: none;
    color: ${props => props.theme.colors.primary};
    font-size: 2rem;
  }
`
