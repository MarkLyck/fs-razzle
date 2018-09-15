import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Element } from 'react-scroll'
import Section from 'components/Section'
import SectionTitle from 'components/Section/SectionTitle'
import Subtitle from 'components/Section/Subtitle'
import Button from 'components/Button'
import { PricingText } from './styles'

const FirstMonthOnus = ({ toggleSignUpModal }) => (
  <Section>
    <Element name="first-month-on-us" />
    <SectionTitle>First month is on us</SectionTitle>
    <Subtitle>
      If you decide Formula Stocks isn't for you - simply cancel online at any time without obligations.
    </Subtitle>
    <PricingText>
      $50 monthly after your <span className="underline">free 30 days</span>
    </PricingText>
    <Button variant="raised" size="large" onClick={toggleSignUpModal}>
      <FontAwesomeIcon icon="gift" />Start your free month
    </Button>
  </Section>
)

export default FirstMonthOnus
