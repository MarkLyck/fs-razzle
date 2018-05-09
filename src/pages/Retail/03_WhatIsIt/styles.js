import styled from 'react-emotion'
import { css } from 'emotion'
import mq from 'common/utils/mq'
import Beside from 'components/Section/Beside'

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
    height: auto;
    width: 100%;
    box-shadow: 0 0px 4px rgba(0,0,0, 0.2), 0 4px 8px rgba(0,0,0, 0.24);
    transition: transform 0.5s;
    margin-bottom: 32px;
    margin-top: 24px;
    &:hover {
      transform: scale(1.05);
    }
`
