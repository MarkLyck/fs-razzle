import React from 'react'
import styled from 'react-emotion'
import Loader from 'media/icons/loader.svg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  box-sizing: border-box;
  overflow-y: scroll;
`

const PortfolioHeader = styled.div`
  height: 412px;
  width: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
  margin-bottom: 16px;
`

const ReturnsSkeleton = styled.div`
  height: 64px;
  width: 100%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
  margin-bottom: 16px;
  box-sizing: border-box;
`

const HoldingsSkeleton = styled.div`
  height: 600px;
  width: 100%;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
  box-sizing: border-box;
`

const Icon = styled.span`
  margin-top: 8px;
  svg {
    height: 80px;
  }
`

const PortfolioLoader = () => (
  <Container>
    <PortfolioHeader>
      <Icon
        dangerouslySetInnerHTML={{
          __html: Loader,
        }}
      />
      <p>Retrieving stock market data...</p>
    </PortfolioHeader>
    <ReturnsSkeleton />
    <HoldingsSkeleton />
  </Container>
)

export default PortfolioLoader
