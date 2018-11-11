import styled from 'react-emotion'
import { css } from 'emotion'
import mq from 'common/utils/mq'
import Beside from 'components/Section/Beside'
import { boxStyle } from 'components/Box'

export const BesideContainer = styled.div`
  ${Beside} {
    align-items: center;
    ${mq.large(css`
      flex-direction: column;
      > div {
        width: 100%;
        max-width: 100%;
        margin: 0;
      }
    `)};
  }
`

export const Screenshot = styled.img`
  ${boxStyle};
  height: auto;
  width: 100%;
  transition: transform 0.5s;
  margin-bottom: 32px;
  margin-top: 24px;
  &:hover {
    transform: scale(1.05);
  }
`
