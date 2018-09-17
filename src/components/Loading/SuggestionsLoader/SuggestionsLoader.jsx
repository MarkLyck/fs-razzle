import React from 'react'
import styled from 'react-emotion'
import Loader from 'media/icons/loader.svg'
import StatisticsLoader from '../StatisticsLoader'

const Container = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
`

const SuggestionsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Icon = styled.span`
  margin-top: 8px;
  svg {
    height: 80px;
  }
`

const SuggestionsLoader = ({ suggestionsType }) => (
  <Container>
    <StatisticsLoader />
    <SuggestionsContainer>
      <Icon
        dangerouslySetInnerHTML={{
          __html: Loader,
        }}
      />
      <p>Loading {suggestionsType}...</p>
    </SuggestionsContainer>
  </Container>
)

export default SuggestionsLoader
