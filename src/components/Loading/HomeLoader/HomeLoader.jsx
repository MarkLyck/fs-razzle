import React from 'react'
import styled from 'react-emotion'
import { withTheme } from 'emotion-theming'
import Spinner from '../HomeSpinner'

const NavSkeleton = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 64px;
  width: 100%;
  background: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

const HeroSkeleton = styled.div`
  height: 650px;
  width: 100%;
  background: ${props => props.theme.colors.lightGray};
  margin: 64px 0 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TitleBlock = styled.div`
  font-family: BLOKK;
  margin: 0 auto;
  text-align: center;
  color: ${props => props.theme.colors.lightGray};
  margin-bottom: 20px;
`

const DividerSkeleton = styled.div`
  height: 2px;
  width: 75px;
  margin: 0 auto;
  background: ${props => props.theme.colors.lightGray};
  margin-bottom: 24px;
`

const TextBlock = styled.div`
  font-family: BLOKK;
  color: ${props => props.theme.colors.lightGray};
  width: 100%;
  max-width: 1160px;
  padding: 0 80px;
  box-sizing: border-box;
  line-height: 1;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const HomeLoader = () => (
  <Container>
    <NavSkeleton />
    <HeroSkeleton>
      <Spinner />
    </HeroSkeleton>
    <TitleBlock>Invest Intelligently</TitleBlock>
    <DividerSkeleton />
    <TextBlock>
      Formula Stocks offers a better way to invest. It estimates which stocks will go up, before they go up. 90% of the
      times we made such an estimate, it proved to be successful in the long run. You simply buy these stocks in your
      own account.<br />
      <br />
      Investing using these estimates, our Entry portfolio returned 59.39% in 2016. Cumulative returns since 2009 are
      491.27%* vs. the S&P500's 176%. It is based on groundbreaking technology, which really makes a difference for our
      members. Typically, when you invest in stocks, your basic expectation is to receive 6-7% p.a. on average. Usually
      a fund product will provide you a risk adjusted, long-term return in this neighborhood. Or, if it is a better
      performing fund, demand very high fees.<br />
      <br />
      Join to better your returns, save on fees, and moderate your risk. Sign up for a 30-day free trial without any
      obligations.
    </TextBlock>
  </Container>
)

export default withTheme(HomeLoader)
