import styled from 'react-emotion'

export const ContainerStyle = {
  margin: '16px',
}

export const GraphContainer = styled.div`
  position: relative;
  width: 100%;
  #dau-graph {
    height: 400px;
  }
  br {
    display: none;
  }
  .chart-balloon {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .balloon-value {
      font-size: 1.25rem;
      text-align: center;
    }
  }
`
