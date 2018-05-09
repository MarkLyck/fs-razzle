import styled, { keyframes } from 'react-emotion'


const animateUp = height => keyframes`
  0% { height: 48px; }
  100% { height: ${height}%; }
`

export const ChartBeside = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 100%;
`

export const Chart = styled.div`
    height: ${props => props.height}%;
    background: ${props => props.color};
    width: 64px;
    margin: 12px;
    min-height: 48px;
    transition: height 1s, transform .24s ease-in;
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
    background: hsla(0,0%,100%,.75);
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
    font-weight: 600;
`
