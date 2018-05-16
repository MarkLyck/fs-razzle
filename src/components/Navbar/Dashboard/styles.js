import styled from 'react-emotion'

export const Bar = styled.div`
    position: relative;
    height: 72px;
    padding: 0 24px;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 0 2px 4px rgba(0,0,0,.08);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.theme.colors.white};

    button {
        margin-right: 8px;
    }
    svg:hover {
        cursor: pointer;
    }

    @media(max-width: 820px) {
        > svg {
            display: none;
        }
        &::after {
            content: '';
            background: url('/static/flask.svg');
            background-size: contain;
            background-repeat: no-repeat;
            height: calc(100% - 24px);
            box-sizing: border-box;
            width: 40px;
        }
    }
`

export default null
