import React from 'react'
import Section from 'components/Section'
import SectionTitle from 'components/Section/SectionTitle'
import Subtitle from 'components/Section/Subtitle'
import Button from 'components/Button'
import { ChatLink } from './styles'

const ScrolledToBottom = ({ toggleSignUpModal }) => {
  window.intercomSettings = {
    app_id: '194mpvo',
    custom_launcher_selector: '#talk-to-us',
  }

  return (
    <Section>
      <SectionTitle>Now that you have scrolled all the way to the bottom...</SectionTitle>
      <Subtitle>It can be just the right moment to stop reading and do some clicking instead.</Subtitle>
      <Button variant="raised" onClick={toggleSignUpModal}>
        I'm ready to try
      </Button>
      <ChatLink id="talk-to-us" href="mailto:i194mpvo@incoming.intercom.io">
        Want more information? - Simply ask.
      </ChatLink>
    </Section>
  )
}

export default ScrolledToBottom
