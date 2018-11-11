import styled, { keyframes } from 'react-emotion'
import Box from 'components/Box'

const animateUp = height => keyframes`
  0% { height: 48px; }
  100% { height: ${height}%; }
`

export const ChartBeside = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: ${props => props.maxHeight || '100%'};
`

export const Chart = styled(Box)`
  height: ${props => props.height}%;
  background: ${props => props.color};
  width: 64px;
  margin: 12px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 2px;
  border-bottom-left-radius: 2px;
  min-height: 48px;
  transition: height 1s, transform 0.24s ease-in;
  position: relative;
  animation: ${props => animateUp(props.height)} 1s linear;

  &:hover {
    transform: translateY(-8px);
  }
`

export const Statistic = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  background: hsla(0, 0%, 100%, 0.75);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  width: 100%;
  font-weight: 100;
  height: 48px;
  margin: 0;
`

export const ChartName = styled.p`
  width: 60px;
  position: absolute;
  top: -28px;
  background: none;
  text-align: center;
  text-transform: capitalize;
`

export const Description = styled.h3`
  text-align: center;
  font-weight: 500;
`
