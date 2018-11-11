import styled from 'react-emotion'
import { css } from 'emotion'
import mq from 'common/utils/mq'
import Beside from 'components/Section/Beside'
import Box from 'components/Box'

export const BesideContainer = styled.div`
  ${Beside} {
    align-items: center;
    ${mq.small(css`
      flex-direction: column-reverse;
      > div {
        width: 100%;
        max-width: 100%;
        margin: 0;
      }
    `)};
  }
`

export const Pilot = styled(Box)`
  justify-content: space-between;
  padding: 8px 16px;
  margin-bottom: 16px;
  transition: transform 0.2s ease-out;
  p {
    white-space: nowrap;
  }
  &:hover {
    transform: scale(1.2);
  }
`

export const Result = styled.p`
  color: ${props => props.theme.colors.secondary};
  font-weight: 500;
  margin-left: 8px;
`
