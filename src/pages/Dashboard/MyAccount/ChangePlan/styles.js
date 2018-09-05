import styled from 'react-emotion'
import { darken } from 'polished'
import { css } from 'emotion'

export const ChangePlanContainer = styled.div`
  margin: 32px auto;
  max-width: 400px;
  box-sizing: border-box;

  .title {
    padding-left: 16px;
    font-size: 1.2rem;
    font-weight: 100;
  }
`

export const ChangePlanPaper = styled.div`
  margin-top: 16px;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
`

export const LargeFlatButton = styled.button`
  width: 100%;
  height: 72px;
  padding: 16px;
  background: ${props => props.theme.colors[props.color]};
  display: flex;
  justify-content: ${props => props.align || 'left'};

  color: white;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || '500'};
  border: none;

  &:hover {
    background: ${props => darken(0.05, props.theme.colors[props.color])};
  }
`

export const ModalContainer = styled.div`
  padding: 24px 16px;

  .submit-button {
    margin: 8px 0 16px;
  }
`

export const modalStyles = `
  background: white;
  width: 400px;
  height: auto;
  outline: none;
  z-index: 11;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    font-size: 1.3rem;
    font-weight: 100;
    margin: 28px;
  }

  .bold {
    font-weight: 600;
  }

  .beside {
    width: 100%;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }

  button {
    margin-top: 28px;
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
