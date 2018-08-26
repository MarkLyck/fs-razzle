import styled from 'react-emotion'

export const GraphContainer = styled.div`
  position: relative;
  width: 100%;
  height: 65vh;
  max-height: 800px;
  br {
    display: none;
  }
  #single-long-term-performance-graph {
    height: 100%;
  }
  .plan-name {
    text-transform: capitalize;
  }
  .chart-balloon {
    display: flex;
    flex-direction: column;
    align-items: center;
    .plan-name {
      color: ${props => props.theme.colors.primary};
      font-size: 0.8rem;
    }
    .balloon-value {
      font-size: 1rem;
      text-align: center;
    }
  }
`
