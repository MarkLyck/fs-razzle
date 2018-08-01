import { keyframes } from 'emotion'
import styled from 'react-emotion'

// This returns a animation
const expand = keyframes`
  0% {
      opacity: 0;
  }

  100% {
      opacity: 1;
  }
`

export const MessageContainer = styled.div`
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.error};
  font-size: 12px;
  padding: 8px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  animation: ${expand} 1s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  svg {
    margin-right: 4px;
  }
`
