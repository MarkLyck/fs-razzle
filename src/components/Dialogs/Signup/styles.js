import { css } from 'emotion'

export const dialogStyles = {
  display: 'flex',
  flexDirection: 'column',
  overflow: 'visible',
}

export const modalStyles = `
  background: white;
  width: 360px;
  height: auto;
  outline: none;
  z-index: 11;
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

export const nextBtnStyles = {
  marginTop: '8px',
  width: 'calc(100% - 30px)',
}
