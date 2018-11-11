import { css } from 'emotion'
import styled from 'react-emotion'
import mq from 'common/utils/mq'
import Beside from 'components/Section/Beside'
import Box from 'components/Box'

export const BesideContainer = styled.div`
  ${Beside} {
    ${mq.medium(css`
            flex-direction: column;
            > div {
                max-width: 100%;
                margin 0;
            }
            > div:first-child {
                margin-bottom: 32px;
            }
	    `)};
  }
`

export const Card = styled(Box)`
  height: 72px;
  width: 100%;
  margin-bottom: 16px;
  transition: transform 0.2s ease-out;
  p {
    color: ${props => props.theme.colors.primary};
  }
  &:hover {
    transform: scale(1.05);
  }
`

export const Subtitle = styled.h3`
  font-weight: 500;
  margin-bottom: 16px;
`

export const ProfileImg = styled.img`
  height: 100%;
  width: auto;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  margin-right: 12px;
`

export const ProfileTextContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h5 {
    margin: 0;
  }
  p {
    margin: 0;
  }
`
