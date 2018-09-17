import React from 'react'
import styled from 'react-emotion'
import { withTheme } from 'emotion-theming'
import Navbar from 'components/Navbar/Retail'
import { Section } from 'components/Section/Section'
import SectionTitle from 'components/Section/SectionTitle'
import Loader from 'media/icons/loader.svg'

const HeroSkeleton = styled.div`
  height: 650px;
  width: 100%;
  background-image: url(/media/images/slides/speedster/speedster.jpg);
  background-image: image-set(
    url(/media/images/slides/speedster/speedster.jpg) 1x,
    url(/media/images/slides/speedster/speedster@2x.jpg) 2x
  );
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin: 64px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    height: 400px;
    max-height: 400px;
  }
`
/* eslint-disable */
export const Overlay = styled.div`
  position: absolute;
  height: 650px;
  top: 64px;
  width: 100%;
  z-index: 4;
  background: -moz-linear-gradient(top, rgba(0, 4, 56, 0.2) 30%, rgba(125, 185, 232, 0) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    rgba(0, 4, 56, 0.2) 30%,
    rgba(125, 185, 232, 0) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    rgba(0, 4, 56, 0.2) 30%,
    rgba(125, 185, 232, 0) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4d000438', endColorstr='#007db9e8',GradientType=0 ); /* IE6-9 */
  @media (max-width: 800px) {
    height: 400px;
  }
`
/* eslint-enable */

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Icon = styled.span`
  margin-top: 8px;
  svg {
    height: 80px;
  }
`

const HomeLoader = () => (
  <Container>
    <Navbar />
    <Overlay />
    <HeroSkeleton />
    <Section>
      <SectionTitle>Invest intelligently</SectionTitle>
      <Icon
        dangerouslySetInnerHTML={{
          __html: Loader,
        }}
      />
      <p>Retrieving stock market data...</p>
    </Section>
  </Container>
)

export default withTheme(HomeLoader)
