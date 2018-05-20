import styled from 'react-emotion'

export const SuggContainer = styled.div`
    width: calc(50% - 16px);
    margin: 8px;
    margin-top: 16px;

    @media(max-width: 850px) {
        width: calc(100% - 16px);
    }
`

export const Card = styled.div`
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
    border-radius: 2px;
    background-color: white;
`

export const SuggHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 8px 4px;
    margin: 0;
    font-size: 0.9rem;
    font-weight: 400;
    h3 {
        font-size: 1.2rem;
        color: ${props => props.theme.colors.black};
    }
    .action {
        font-weight: 500;
        margin-right: 8px;
        color: ${props => props.theme.colors.primary};
    }
    .SELL-action {
        color: ${props => props.theme.colors.secondary};
    }
`

export const ContentContainer = styled.div`
    display: flex;
    border-bottom: 6px solid ${props => props.theme.colors[props.type === 'BUY' ? 'primary' : 'secondary']};
`

export const Placeholder = styled.div`
    height: 33px;
    width: 100%;
`

export const StockInfoList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-right: 1px solid ${props => props.theme.colors.lightGray};
    padding:  16px;
`
