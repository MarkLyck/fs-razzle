import { css } from 'emotion'
import styled from 'emotion/react'

export const ChartBeside = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 300px;
`

const chart = css`
    width: 64px;
    min-height: 45px;
    position: relative;
`

export const PrimaryChart = styled('div')`
    composes: ${chart};
    height: ${props => props.height}%;
    background: ${props => props.color};
    margin: 12px;
    margin-bottom: 0;
    transform: translateX(-55%);
`

export const SecondaryChart = styled('div')`
    composes: ${chart};
    height: ${props => props.height}%;
    background: ${props => props.color};
    margin: 12px;
    margin-top: 0;
    transform: translateX(55%);
    display: flex;
    align-items: flex-end;
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

export const Line = styled('div')`
    width: 100%;
    height: 2px;
    background: black;
`

export const Description = styled('h3')`
    text-align: center;
`


export default null
