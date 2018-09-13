import { css } from 'emotion'
import styled from 'react-emotion'

const altStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  svg {
    font-size: 2rem;
  }
  h4 {
    margin-top: 16px;
  }
`

export const LoadingContainer = styled.div`
  height: 360px;
  ${altStyle} svg {
    font-size: 3rem;
    color: ${props => props.theme.colors.primary};
  }
  h4 {
    color: ${props => props.theme.colors.black};
  }
`

export const FailedContainer = styled.div`
  height: 360px;
  ${altStyle} margin: 16px;
  color: ${props => props.theme.colors.black};
  border: 2px dashed ${props => props.theme.colors.lightGray};
`

export const GraphContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  .stock-graph {
    height: 360px;
  }
  br {
    display: none;
  }
  .chart-balloon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .ticker-name {
      color: ${props => props.theme.colors.primary};
      font-size: 0.8rem;
      margin: 0;
      padding: 0;
    }
    .SELL-ticker-name {
      color: ${props => props.theme.colors.secondary};
    }
    .balloon-value {
      font-size: 1rem;
      text-align: center;
      margin: 0;
      padding: 0;
    }
  }
`
