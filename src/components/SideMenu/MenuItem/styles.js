import styled from 'react-emotion'

export const Button = styled.button`
  position: relative;
  width: 100%;
  height: 72px;
  padding: 8px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: none;
  border: none;
  background: none;
  background: ${props => props.theme.colors[props.isActive ? 'dbGray' : '']};
  box-shadow: ${props => (props.isActive ? '0 2px 4px rgba(0,0,0,.08)' : 'none')};
  color: #767c8a;
  outline: none;
  &::after {
    content: '';
    background: ${props => props.theme.colors[props.isActive ? 'primary' : 'none']};
    width: 8px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  svg {
    color: ${props => (props.isActive ? props.theme.colors.white : '')};
    font-size: 24px;
    margin: 0;
  }
  h4 {
    text-transform: capitalize;
    color: ${props => (props.isActive ? props.theme.colors.white : '')};
    min-width: 50px;
    max-width: 64px;
    display: block;
    text-align: center;
    font-size: 10px;
    margin: 0;
    margin-top: 8px;
  }
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.white};
  }
`
