import styled from 'react-emotion'

export const Container = styled.div`
  margin: 16px;
  padding: 16px;
  background: white;
  border-radius: 2px;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
`

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
