import styled from 'react-emotion'

export const Box = styled.div`
    display: flex;
    align-items: center;
    padding: 8px;
    height: 80px;
    width: 100%;
    margin: 0 8px;
    box-shadow: 0 2px 6px rgba(0,0,0,.16);
    transition: transform .3s;
    border-radius: 2px;
    &:hover {
        transform: scale(1.025);
    }
`

export const Content = styled.div`
    background: none;
    width: 68%;
    border-left: 1px solid hsla(0,0%,100%,.2);
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
