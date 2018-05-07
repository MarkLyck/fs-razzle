import styled from 'react-emotion'

export const Container = styled.div`
    width: 100%;
`

export const Bar = styled.div`
    position: relative;
    background: ${props => props.color};
    width: ${props => props.width}%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #fff;
    padding-right: 16px;
    font-weight: 400;
    transition: transform 0.5s;
    &:hover {
        transform: scale(1.05);
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
