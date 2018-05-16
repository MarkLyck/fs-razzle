import styled from 'react-emotion'

export const DashboardLayout = styled.div`
    display: flex;
    height: 100vh;
`
export const DashboardContent = styled.div`
    width: 100%;
    background: ${props => props.theme.colors.offWhite};
    overflow-y: scroll;
    position: relative;
`