import React from 'react'
import styled from 'react-emotion'
import Box from 'components/Box'

const StatBox = styled(Box)`
  align-items: center;
  padding: 8px;
  height: 80px;
  width: 100%;
  margin: 0 8px;
  background: ${props => props.theme.colors[props.background || 'white']};
  box-sizing: content-box;
`

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  padding: 8px;
  box-sizing: border-box;

  > div {
    width: calc(100% / 4 - 32px);
  }

  > div:nth-child(2) {
    > div:last-child {
      border-left: 1px solid #eaeaeb;
    }
  }

  > div:last-child {
    > div:last-child {
      border-left: 1px solid #eaeaeb;
    }
  }

  @media (max-width: 1200px) {
    > div {
      width: calc(100% / 2 - 32px);
      margin-bottom: 16px;
    }
  }

  @media (max-width: 600px) {
    margin-top: 8px;
    > div {
      width: calc(100% - 32px);
      height: 60px;
    }
  }
`

const StatisticsLoader = () => (
  <Container>
    <StatBox background="primary" />
    <StatBox />
    <StatBox background="secondary" />
    <StatBox />
  </Container>
)

export default StatisticsLoader
