import styled from 'react-emotion'
import { darken } from 'polished'

export const Container = styled.div`
    width: 100%;
    margin-top: 16px;
    p {
        font-weight: bold;
    }
`

export const Bar = styled.div`
    position: relative;
    background: ${props => props.color};
    width: ${props => props.width}%;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    box-shadow: 0 0.25rem 0 0 ${props => darken(0.1, props.color)};
    height: 48px;
    margin: 16px 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #fff;
    padding-right: 16px;
    font-weight: 400;
    transition: transform 0.5s;

    &:hover {
        transform: translateX(10px);
    }

    & span {
        position: absolute;
        right: -60px;
        color: ${props => props.color};
    }
`

export const Dollars = styled.h3`
    font-size: 1.2rem;
    font-weight: bold;
    color: ${props => props.theme.colors.white};
`

export const MarketDollars = styled.h3`
    font-size: 1.2rem;
    font-weight: bold;
    color: ${props => props.theme.colors.black};
    position: absolute;
    right: -8px;
    top: 50%;
    transform: translate(100%, -50%);
`
