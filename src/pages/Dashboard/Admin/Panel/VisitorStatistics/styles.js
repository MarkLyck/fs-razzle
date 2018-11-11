import styled from 'react-emotion'
import Box from 'components/Box'

export const Container = styled(Box)`
  flex-direction: column;
  margin: 16px;
  padding: 16px;
`

export const PieChartsContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  height: auto;
  width: 100%;
  padding-bottom: 24px;

  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`

export const ChartContainer = styled.div`
  width: 25%;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    height: 100%;
    width: 100%;
  }

  @media (max-width: 600px) {
    width: 49%;
    height: 180px;
  }
`
