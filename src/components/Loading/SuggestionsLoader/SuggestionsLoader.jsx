import React from 'react'
import styled from 'react-emotion'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import StatisticsLoader from '../StatisticsLoader'

const Icon = styled(FontAwesomeIcon) `
    color: ${props => props.theme.colors.primary};
`

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
            <Icon icon="spinner-third" spin size="6x" />
            <LoadingText>Loading Suggestions...</LoadingText>
        </SuggestionsContainer>

    </Container>
)

export default SuggestionsLoader