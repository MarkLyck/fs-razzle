import React from 'react'
import styled from 'react-emotion'
import StatisticsLoader from '../StatisticsLoader'
import LoadingSpinner from '../Spinner'

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

const LoadingText = styled.h3`
    margin-top: 16px;
`

const SuggestionsLoader = () => (
    <Container>
        <StatisticsLoader />
        <SuggestionsContainer>
            <LoadingSpinner variant="small" />
            <LoadingText>Loading Suggestions...</LoadingText>
        </SuggestionsContainer>
        
    </Container>
)

export default SuggestionsLoader