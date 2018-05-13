import styled from 'react-emotion'

export const ListContainer = styled.div`
    overflow-y: auto;
    .gray-item {
        background: ${props => props.theme.colors.offwhite};
        border-top: 1px solid ${props => props.theme.colors.fadedGray};
        border-bottom: 1px solid ${props => props.theme.colors.fadedGray};
    }
`

export const ItemValue = styled.div`
    margin-left: 24px;
    font-weight: 500;
`


export const ListItemStyles = {
    display: 'flex',
    justifyContent: 'space-between',
}
