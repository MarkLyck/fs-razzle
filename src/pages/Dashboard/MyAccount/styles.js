import styled from 'react-emotion'

export const MyAccountContainer = styled.div`
  margin: 32px auto;
  padding: 24px;
  max-width: 480px;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
  box-sizing: border-box;

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
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 16px;
`
