import styled from 'react-emotion'

export const DashboardLayout = styled.div`
  display: flex;
  height: 100vh;
`
export const DashboardContent = styled.div`
  width: 100%;
  background: ${props => props.theme.colors.polar};
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  position: relative;
`
