import styled from 'emotion/react'

export const ChartBeside = styled('div')`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    height: 300px;
`

export const Chart = styled('div')`
    height: ${props => props.height}%;
    background: ${props => props.color};
    width: 64px;
    margin: 12px;
    min-height: 45px;
    transition: height 1s,transform .5s,-webkit-transform .5s;
    position: relative;

    &:hover {
      transform: scale(1.1);
    }
`

export const Statistic = styled('p')`
    display: flex;
    justify-content: center;
    align-items: center;
    background: hsla(0,0%,100%,.75);
    width: 100%;
    font-weight: 100;
    height: 45px;
    margin: 0;
`

export const ChartName = styled('p')`
    width: 60px;
    position: absolute;
    top: -40px;
    background: none;
    text-align: center;
    text-transform: capitalize;
`

export const Description = styled('h3')`
    text-align: center;
`


export default null
