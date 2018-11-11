import styled from 'react-emotion'

export const GraphContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  br {
    display: none;
  }
  .portfolio-legends {
    top: 24px;
  }
  #portfolio-graph {

    height: 100%;
  }
  .chart-balloon {
    display: flex;
    flex-direction: column;
    align-items: center;
    .plan-name {
      color: ${props => props.theme.colors.primary};
      text-tranform: uppercase
      font-weight: bold;
      font-size: 0.8rem;
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
