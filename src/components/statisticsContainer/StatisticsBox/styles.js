import styled from 'react-emotion'
import Box from 'components/Box'

export const Card = styled(Box)`
  box-sizing: content-box;
  align-items: center;
  padding: 8px;
  height: 80px;
  width: 100%;
  margin: 0 8px;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.025);
  }
`

export const Content = styled.div`
  background: none;
  width: 68%;
  border-left: 2px solid hsla(0, 0%, 100%, 0.2);
  padding-left: 10%;
  h4 {
    font-weight: 400;
    font-size: 1.8rem;
  }
  h5 {
    font-weight: 100;
  }
`

export const Symbol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  font-size: 25px;
  i {
    font-size: 25px;
  }
`
