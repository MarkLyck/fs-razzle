import styled from 'react-emotion'
import { css } from 'emotion'

export const ModalContainer = styled.div`
  padding: 24px 16px;

  .submit-button {
    margin: 16px 0;
  }
`

export const ModalTitle = styled.h3`
  padding: 0 16px 16px;
  font-size: 24px;
  font-weight: 600;
`

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
