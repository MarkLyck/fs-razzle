import styled from 'react-emotion'

export const ContainerStyle = {
  margin: '16px',
  padding: '16px',
}

export const PieChartsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 200px;
  padding-bottom: 24px;
`

export const ChartContainer = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  > div {
    height: 100%;
    width: 100%;
  }
`
