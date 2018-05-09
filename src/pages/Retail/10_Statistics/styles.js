import styled from 'react-emotion'
import { css } from 'emotion'
import mq from 'common/utils/mq'
import Beside from 'components/Section/Beside'

export const BesideContainer = styled.div`
	${Beside} {
		align-items: center;
        margin-bottom: 32px;
        ${mq.small(css`
            flex-direction: column;
            margin-bottom: 0;
            > div {
                width: 100%;
                max-width: 100%;
                margin: 0;
            }

            .win-loss-chart {
                display: none;
            }

            .outperforming-years-chart {
                margin-top: 32px;
            }
	    `)};
	}
`