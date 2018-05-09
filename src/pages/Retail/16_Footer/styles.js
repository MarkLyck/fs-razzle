import styled from 'react-emotion'

export const FooterContainer = styled.footer`
    background: ${props => props.theme.colors.gray};
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
        color: ${props => props.theme.colors.white};
    }
    a {
        outline: none;
        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }
`

export const FooterDisclaimer = styled.div`
    padding: 40px;
`

export const CopyRightContainer = styled.footer`
    background: ${props => props.theme.colors.darkGray};
    width: 100%;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        margin-right: 32px;
        margin-left: 32px;
        height: 100%;
        width: auto;
    }
`

export default null
