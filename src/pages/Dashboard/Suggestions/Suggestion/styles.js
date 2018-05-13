import styled from 'react-emotion'

export const SuggContainer = styled.div`
    width: calc(50% - 16px);
    margin: 8px;
    margin-top: 16px;
    @media(max-width: 850px) {
        width: calc(100% - 16px);
    }
`

export const CardContentStyles = {
    padding: 0,
}


export const SuggHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 8px 4px;
    margin: 0;
    font-size: 0.9rem;
    font-weight: 400;
    .action {
        font-weight: 500;
        color: ${props => props.theme.colors.primary}
    }
    .SELL-action {
        color: ${props => props.theme.colors.secondary}
    }
`

export const ContentContainer = styled.div`
    display: flex;
`

export const Placeholder = styled.div`
    height: 33px;
    width: 100%;
`

export const StockInfoList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 200px;
    border-right: 1px solid ${props => props.theme.colors.lightGray};
    padding:  16px;
`
