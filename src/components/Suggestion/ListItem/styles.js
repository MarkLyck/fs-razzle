import styled from 'react-emotion'

export const SuggItem = styled.li`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    p {
        margin: 0 8px 8px 0;
        font-size: 0.8rem;
        color: ${props => props.theme.colors.gray};
    }
    h4 {
        font-size: 1rem;
        font-weight: 500;
    }
`

