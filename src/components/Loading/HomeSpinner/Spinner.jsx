import React from 'react'
import { withTheme } from 'emotion-theming'
import styled, { keyframes } from 'react-emotion'
import Flask from 'media/icons/flask.svg'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const Container = styled.div`
  position: relative;
  height: 240px;
  width: 240px;
  border-radius: 50%;
`

const Spinner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border: 8px solid ${props => props.theme.colors.lightGray};
  border-radius: 50%;
  border-top: 8px solid ${props => props.theme.colors.primary};
  height: 100%;
  width: 100%;
  animation: ${spin} 1s linear infinite;
`

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  border: 8px solid transparent;
  border-radius: 50%;
  border-top: 8px solid transparent;
  height: 100%;
  width: 100%;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`

const Icon = styled(Flask)`
  height: 80px;
  position: absolute;
  top: 50%;
  left: calc(50% + 8px);
  transform: translate(-50%, -50%);
`

const LoadingText = styled.h1`
  position: absolute;
  bottom: -124px;
  left: calc(50% + 20px);
  transform: translateX(-50%);
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
  text-align: center;
  font-size: 2rem;
`

const SmallSpinner = styled.div`
  width: 64px;
  height: 64px;
  border: 8px solid ${props => props.theme.colors.lightGray};
  border-radius: 50%;
  border-top: 8px solid ${props => props.theme.colors.primary};
  animation: ${spin} 1s linear infinite;
`

const LoadingSpinner = ({ variant }) => {
  if (variant === 'small') return <SmallSpinner />

  return (
    <Container>
      <Background />
      <Spinner />
      <Icon />
      <LoadingText>Loading...</LoadingText>
    </Container>
  )
}

export default withTheme(LoadingSpinner)
