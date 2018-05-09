import styled from 'react-emotion'

export const List = styled.ul`
    width: 100%;
    background: #fff;
    margin: 16px 0;
    box-shadow: 0 2px 4px rgba(0,0,0,.16);
`

export const ListItem = styled.li`
    padding: 16px;
    border-bottom: 1px solid ${props => props.theme.colors.lightGray};
    span {
        font-weight: 600;
    }
`