import React from 'react'
import Section from 'components/Section'
import SectionTitle from 'components/Section/SectionTitle'
import Subtitle from 'components/Section/Subtitle'
import Button from 'components/Button'
import { ChatLink } from './styles'

const ScrolledToBottom = ({ toggleSignUpModal }) => (
  <Section data-offwhite>
    <SectionTitle>Now that you have scrolled all the way to the bottom...</SectionTitle>
    <Subtitle>It can be just the right moment to stop reading and do some clicking instead.</Subtitle>
    <Button variant="raised" onClick={toggleSignUpModal}>
      I'm ready to try
    </Button>
    <ChatLink href="mailto:i194mpvo@incoming.intercom.io">Want more information? - Ask us anything!</ChatLink>
  </Section>
)

export default ScrolledToBottom
