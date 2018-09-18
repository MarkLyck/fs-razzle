import styled from 'react-emotion'
import { darken } from 'polished'

export const SuggContainer = styled.div`
  width: calc(50% - 16px);
  margin: 8px;
  margin-top: 16px;
  overflow: hidden;

  @media (max-width: 850px) {
    width: calc(100% - 16px);
  }
`

export const Card = styled.div`
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  border-radius: 2px;
  background-color: white;
`

export const SuggHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 8px 4px;
  margin: 0;
  font-size: 0.9rem;
  font-weight: 400;
  h3 {
    font-size: 1.2rem;
    color: ${props => props.theme.colors.black};
  }
  .action {
    font-weight: 500;
    margin-right: 8px;
    color: ${props => props.theme.colors.primary};
  }
  .SELL-action {
    color: ${props => props.theme.colors.secondary};
  }
`

export const ContentContainer = styled.div`
  display: flex;
  border-bottom: 6px solid ${props => props.theme.colors[props.type === 'BUY' ? 'primary' : 'secondary']};
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
  }
`

export const Placeholder = styled.div`
  height: 44px;
  width: 100%;
  margin-bottom: 16px;
`

export const ButtonPlaceholder = styled.div`
  height: 36px;
  width: 100%;
`

export const StockInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-right: 1px solid ${props => props.theme.colors.lightGray};
  padding: 16px;
`
