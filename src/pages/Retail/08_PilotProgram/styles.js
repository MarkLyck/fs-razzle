import styled from 'react-emotion'
import { darken } from 'polished'
import { css } from 'emotion'
import mq from 'common/utils/mq'
import Beside from 'components/Section/Beside'

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

export const Pilot = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px 16px;
    margin-bottom: 16px;
    border-radius: 4px;
    border: 1px solid ${darken(0.1, '#fff')};
    box-shadow: 0 0.25rem 0 0 ${darken(0.1, '#fff')};
    p {
        white-space: nowrap;
    }
`


export const Result = styled.p`
    color: ${props => props.theme.colors.secondary};
    font-weight: bold;
    margin-left: 8px;
`
