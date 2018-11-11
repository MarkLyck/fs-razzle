import React from 'react'
import Section from 'components/Section'
import SectionTitle from 'components/Section/SectionTitle'
import Beside from 'components/Section/Beside'
import Left from 'components/Section/Beside/Left'
import Right from 'components/Section/Beside/Right'
import { BesideContainer, Screenshot } from './styles'

const WhatIsIt = () => (
  <Section data-offwhite>
    <SectionTitle>What is it?</SectionTitle>
    <BesideContainer>
      <Beside>
        <Left data-center>
          <Screenshot src="media/images/screenshots/trades.png" alt="" />
        </Left>
        <Right>
          <p>
            We offer stock recommendations: what to buy and when to sell. With an unusual twist offering higher expected
            reward, with lower expected risk.
            <br />
            <br />
            Included is a model portfolio designed to enhance wealth through intelligent portfolio management. Use it to
            better your investment performance.
            <br />
            <br />
            Using Formula Stocks is easy. After logging in you will find recommendations for stocks trading on all US
            stock exchanges including large international stocks. These can be traded from anywhere in the world,
            through any bank or broker you already use.
            <br />
            <br />
            You can use these individually or replicate our model portfolio. Simply follow the instructions, and you
            will be handling your own account in no time.
          </p>
        </Right>
      </Beside>
    </BesideContainer>
  </Section>
)

export default WhatIsIt
