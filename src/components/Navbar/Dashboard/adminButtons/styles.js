import styled from 'react-emotion'
import Button from 'components/Button'

export const AdminButtonsContainer = styled.div`
  display: flex;
  height: 36px;
`

export const AdminButton = styled(Button)`
  display: flex;
  align-items: center;
  p {
    line-height: 1;
  }

  @media (max-width: 885px) {
    svg {
      margin: 0;
    }
  }
`

export const ButtonTitle = styled.p`
  @media (max-width: 885px) {
    display: none;
  }
`
