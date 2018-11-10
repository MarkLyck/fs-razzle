import styled from 'react-emotion'
import Box from 'components/Box'

export const Container = styled(Box)`
  margin: 16px;
`

export const GraphContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 6px;
  overflow: hidden;
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
