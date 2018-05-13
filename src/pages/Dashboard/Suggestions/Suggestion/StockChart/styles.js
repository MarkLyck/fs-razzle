import styled from 'react-emotion'

export const LoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    svg {
        color: ${props => props.theme.colors.primary};
    }
    h4 {
        margin-top: 16px;
    }
`

export const FailedContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 16px;
    border: 2px dashed ${props => props.theme.colors.lightGray};
    svg {
        color: ${props => props.theme.colors.lightGray};
    }
    h4 {
        margin-top: 16px;
        color: ${props => props.theme.colors.lightGray};
    }
`

export const GraphContainer = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    .suggestion-graph {
        height: 100%;
    }
    br {
        display: none;
    }
    .chart-balloon {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .ticker-name {
            color: ${props => props.theme.colors.primary};
            font-size: 0.8rem;
            margin: 0;
            padding: 0;
        }
        .SELL-ticker-name {
            color: ${props => props.theme.colors.secondary};
        }
        .balloon-value {
            font-size: 1rem;
            text-align: center;
            margin: 0;
            padding: 0;
        }
    }
`
