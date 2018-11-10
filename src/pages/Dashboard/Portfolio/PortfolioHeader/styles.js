import styled from 'react-emotion'
import { css } from 'emotion'
import mq from 'common/utils/mq'
import Box from 'components/Box'

export const HeaderContainer = styled(Box)`
  height: 412px;
  margin: 16px;
`

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 180px;
  padding: 16px;
  .market-name {
    display: flex;
    h3 {
      margin-right: 8px;
    }
  }
  .results {
    margin-bottom: 16px;
    h3 {
      font-size: 1.3rem;
      font-weight: 400;
      margin-bottom: 8px;
      text-transform: capitalize;
    }
    p {
      font-size: 1rem;
      span {
        font-weight: 500;
      }
    }
  }
  .plan-results {
    h3 {
      color: ${props => props.theme.colors.primary};
    }
    span {
      color: ${props => props.theme.colors.primary};
    }
  }
  .stock-allocation {
    position: relative;
    margin-top: auto;
    width: 100%;
    height: 180px;
    &::before {
      content: 'allocation';
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  ${mq.medium(css`
    display: none;
  `)};
`

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 180px);
  border-right: 1px solid ${props => props.theme.colors.lightGray};
  h4 {
    font-weight: 400;
    font-size: 1.25rem;
    margin: 16px;
  }
  ${mq.medium(css`
    width: 100%;
    border: none;
  `)};
`
