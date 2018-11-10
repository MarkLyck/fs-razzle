import { css } from 'emotion'
import styled from 'react-emotion'
import { darken } from 'polished'
import mq from 'common/utils/mq'
import Beside from 'components/Section/Beside'

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

export const Card = styled.div`
  height: 72px;
  width: 100%;
  display: flex;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0.25rem 0 0 ${darken(0.15, '#fff')}, 0 0px 16px rgba(0, 0, 0, 0.075);
  margin-bottom: 16px;
  p {
    color: ${props => props.theme.colors.primary};
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
