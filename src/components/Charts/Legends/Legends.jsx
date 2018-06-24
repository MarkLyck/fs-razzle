import styled from 'react-emotion'

export const Legend = styled.div`
  text-transform: capitalize;
  position: relative;
  margin: 0;
  padding: 0;
  margin-bottom: 8px;
  font-size: 0.75rem;
  &:before {
    content: '';
    position: absolute;
    left: -28px;
    top: 0;
    background: ${props => props.color};
    height: 20px;
    width: 20px;
  }
`

export const Legends = styled.div`
  position: absolute;
  left: ${props => props.left || 100}px;
  top: ${props => props.top || 24}px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`

export default null
