import React from 'react'
import styled from 'react-emotion'
import Loader from 'media/icons/loader.svg'
import Box from 'components/Box'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  box-sizing: border-box;
  overflow-y: scroll;
`

const PortfolioHeader = styled(Box)`
  height: 412px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 16px;
`

const ReturnsSkeleton = styled(Box)`
  height: 64px;
  width: 100%;
  margin-bottom: 16px;
`

const HoldingsSkeleton = styled(Box)`
  height: 600px;
  width: 100%;
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
