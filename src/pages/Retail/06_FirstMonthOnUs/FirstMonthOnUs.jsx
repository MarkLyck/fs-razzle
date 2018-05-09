import React from 'react'
import { css } from 'emotion'
import Section from 'components/Section'
import SectionTitle from 'components/Section/SectionTitle'
import Subtitle from 'components/Section/Subtitle'
import Button from 'components/Button'

const FirstMonthOnus = () => (
    <Section>
        <SectionTitle>First month is on us</SectionTitle>
        <Subtitle>If you decide Formula Stocks isn't for you - simply cancel online at any time without obligations. After the first month the service costs <span className={css`text-decoration: underline`}>$50 a month</span></Subtitle>
        <Button variant="raised" size="large">Start your free month</Button>
    </Section>
)

export default FirstMonthOnus
