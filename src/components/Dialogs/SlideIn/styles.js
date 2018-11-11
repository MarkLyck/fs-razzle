import styled from 'react-emotion'
import { css } from 'emotion'

export const modalStyles = `
  outline: none;
  z-index: 100;
  height: 100%;
`

export const Blur = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  transition: backdrop-filter 1.5s ease-out;
`

export const overlayClass = css`
  z-index: 10;
  background rgba(0,0,0,0.1);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`
