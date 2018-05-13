import styled from 'react-emotion'
import { darken } from 'polished'

export const Button = styled.button`
    position: relative;
    width: 100%;
    height: 72px;
    padding: 8px 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: none;
    border: none;
    background: none;
    color: ${props => props.theme.colors.lightGray};
    color: #767C8A;
    outline: none;
    svg {
        font-size: 24px;
        margin: 0;
    }
    h4 {
        min-width: 50px;
        max-width: 64px;
        display: block;
        text-align: center;
        font-size: 10px;
        margin: 0;
        margin-top: 8px;
    }
    &:hover {
        cursor: pointer;
        color: ${props => props.theme.colors.white};
    }
`
