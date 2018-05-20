import styled from 'react-emotion'

export const Logo = styled.div`
    background-image: url('/media/icons/logo_horizontal.svg');
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
    width: 275px;
    height: 40px;

    &:hover {
        cursor: pointer;
    }

    @media(max-width: 540px) {
        width: 40px;
        background-image: url('/media/icons/flask.svg');
    }
`

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
`

export default null
