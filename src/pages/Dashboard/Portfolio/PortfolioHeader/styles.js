import styled from 'react-emotion'

export const HeaderContainer = styled.div`
    display: flex;
    margin: 16px;
    background-color: white;
    box-shadow: 0 2px 8px rgba(0,0,0,.16);
`

export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 180px;
    padding: 16px;
    .results {
        margin-bottom: 16px;
        h3 {
            font-size: 1.3rem;
            font-weight: 500;
            margin-bottom: 8px;
            text-transform: capitalize;
        }
        p {
            font-size: 1rem;
            span {
                font-weight: 600;
            }
        }
    }
    .plan-results {
        h3 {
            color: ${props => props.theme.colors.primary};
        }
        span {
            color: ${props => props.theme.colors.primary};
        }
    }
    .stock-allocation {
        position: relative;
        margin-top: auto;
        width: 100%;
        height: 180px;
        &::before {
            content: 'allocation';
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
    @media(max-width: 800px) {
        display: none;
    }
`

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100% - 180px);
    border-right: 1px solid ${props => props.theme.colors.lightGray};
    h4 {
        font-weight: 400;
        font-size: 1.25rem;
        margin: 16px;
    }
    @media(max-width: 800px) {
        width: 100%;
        border: none;
    }
`
