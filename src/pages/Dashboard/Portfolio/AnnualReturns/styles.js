import styled from 'react-emotion'
import { css } from 'emotion'
import mq from 'common/utils/mq'

export const ReturnsContainer = styled.div`
    background-color: white;
    box-shadow: 0 2px 8px rgba(0,0,0,.16);
    margin: 16px;
    display: flex;
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
        .three-years {
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