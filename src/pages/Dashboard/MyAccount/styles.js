import styled from 'react-emotion'
import Box from 'components/Box'

export const MyAccountContainer = styled(Box)`
  flex-direction: column;
  margin: 32px auto;
  padding: 24px;
  max-width: 400px;

  .user-info {
    font-weight: 400;
    margin: 8px 0;
    font-size: 1.1rem;
  }
  .user-plan {
    text-transform: capitalize;
  }
`

export const Title = styled.h3`
  font-weight: 100;
  font-size: 1.2rem;
  margin-bottom: 16px;
  color: ${props => props.theme.colors.gray};
`
