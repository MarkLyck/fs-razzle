import styled from 'react-emotion'

export const FieldLabel = styled.p`
  text-align: left;
  align-self: flex-start;
  margin: 8px 0 4px 8px;
`

export const Logo = styled.div`
  background-image: url('/media/icons/logo_horizontal.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100%;
  height: 32px;
  margin: 32px auto;

  &:hover {
    cursor: pointer;
  }
`

export const ResetPWContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 480px;
`
