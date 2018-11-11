import styled from 'react-emotion'
import { boxStyle } from 'components/Box'

export const GraphContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 720px;
  height: 480px;
  br {
    display: none;
  }
  .portfolio-legends {
    top: 24px;
  }
  #single-launch-performace-graph {
    ${boxStyle};
    height: 100%;
  }
  .chart-balloon {
    display: flex;
    flex-direction: column;
    align-items: center;
    .plan-name {
      color: ${props => props.theme.colors.primary};
      font-size: 0.8rem;
      font-weight: 600;
    }
    .market-name {
      color: ${props => props.theme.colors.black};
    }
    .balloon-value {
      font-size: 1rem;
      text-align: center;
    }
  }
`
