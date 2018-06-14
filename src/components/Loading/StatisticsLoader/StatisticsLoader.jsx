import React from 'react'
import styled from 'react-emotion'

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  height: 80px;
  width: 100%;
  margin: 0 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.16);
  background: ${props => props.theme.colors[props.background || 'white']};
  border-radius: 2px;
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
    <Box background="primary" />
    <Box />
    <Box background="secondary" />
    <Box />
  </Container>
)

export default StatisticsLoader
