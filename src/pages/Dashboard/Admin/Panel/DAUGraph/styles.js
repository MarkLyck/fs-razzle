import styled from 'react-emotion'

export const Container = styled.div`
  margin: 16px;
  padding: 8px 0;
  background: white;
  border-radius: 2px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
`

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
