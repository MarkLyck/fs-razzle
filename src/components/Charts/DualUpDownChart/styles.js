import { css } from 'emotion'
import styled from 'react-emotion'

export const ChartBeside = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 200px;
`

const chart = () => css`
  width: 64px;
  min-height: 45px;
  position: relative;
`

export const PrimaryChart = styled.div`
  ${chart};
  height: ${props => props.height}%;
  background: ${props => props.color};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin: 12px;
  margin-bottom: 0;
  transform: translateX(-55%);
`

export const SecondaryChart = styled.div`
  ${chart};
  height: ${props => props.height}%;
  background: ${props => props.color};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  margin: 12px;
  margin-top: 0;
  transform: translateX(55%);
  display: flex;
  align-items: flex-end;
`

export const Statistic = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  background: hsla(0, 0%, 100%, 0.75);
  width: 100%;
  font-weight: 100;
  height: 45px;
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

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background: black;
`

export const Description = styled.h3`
  text-align: center;
  font-weight: 500;
`

export default null
