import styled from 'react-emotion'
import Box from 'components/Box'
import { darken } from 'polished'

export const SuggContainer = styled(Box)`
  flex-direction: column;
  width: calc(50% - 16px);
  margin: 8px;
  padding-top: 16px;

  @media (max-width: 850px) {
    width: calc(100% - 16px);
  }
`

export const SuggHeader = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 8px 4px 12px;
  margin: 0;
  font-size: 0.9rem;
  font-weight: 400;
  h3 {
    font-size: 1.2rem;
    color: ${props => props.theme.colors.black};
  }
  .action {
    font-weight: 400;
    margin-right: 8px;
    color: ${props => props.theme.colors.primary};
  }
  .SELL-action {
    color: ${props => props.theme.colors.secondary};
  }
`

export const ContentContainer = styled.div`
  position: relative;
  display: flex;
  border-radius: 6px;
  border-bottom: 6px solid ${props => props.theme.colors[props.type === 'BUY' ? 'primary' : 'secondary']};

  .amcharts-zoom-out-bg {
    y: 237;
    height: 33px;
    width: 92px;

    &:hover {
      cursor: pointer;
    }
  }
  .amcharts-zoom-out-label {
    transform: translate(26px, 243px);
    &:hover {
      cursor: pointer;
    }
  }
  .amcharts-zoom-out-image {
    y: 237;
    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column-reverse;
    .stock-chart,
    .loading-container,
    .failed-container {
      height: 240px;
      background: ${props => darken(0.02, '#fff')};
    }
    .info-list {
      &:last-child {
        margin-bottom: 0;
      }
    }
    .list-item {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      width: 100%;
      .value {
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        margin-left: 8px;
      }
      &:last-of-type {
        margin-bottom: 0;
      }
    }
    .placeholder {
      display: none;
    }
    button {
      width: 100%;
      justify-content: center;
      margin-top: 8px;
    }

    .amcharts-zoom-out-bg,
    .amcharts-zoom-out-image {
      y: 172;
    }
    .amcharts-zoom-out-label {
      transform: translate(26px, 179px);
    }
  }
`

export const Placeholder = styled.div`
  height: 44px;
  width: 100%;
  margin-bottom: 16px;
`

export const LastPrice = styled.p`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  opacity: 0.4;
  z-index: 1;
  font-weight: 500;
`

export const ButtonPlaceholder = styled.div`
  height: 36px;
  width: 100%;
`

export const StockInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
`
