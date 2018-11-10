import styled from 'react-emotion'
import { css } from 'emotion'
import mq from 'common/utils/mq'
import Box from 'components/Box'

export const ReturnsContainer = styled(Box)`
  margin: 16px;
  justify-content: space-evenly;
  align-items: center;
  ${mq.medium(css`
    .five-years {
      display: none;
    }
    .divider:nth-child(2) {
      display: none;
    }
  `)};

  ${mq.small(css`
    s .three-years {
      display: none;
    }
    .divider:nth-child(4) {
      display: none;
    }
  `)};
`

export const Divider = styled.div`
  width: 2px;
  height: 32px;
  background-color: ${props => props.theme.colors.lightGray};
  margin: 16px 0;
`
