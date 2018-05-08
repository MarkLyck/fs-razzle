import React from 'react'
import Section from 'components/Section'
import Subtitle from 'components/Section/Subtitle'
import Button from 'material-ui/Button'

const ScrolledToBottom = () => (
    <Section data-offwhite>
        <h2>Now that you have scrolled all the way to the bottom...</h2>
        <Subtitle>It can be just the right moment to stop reading and do some clicking instead.</Subtitle>
        <Button color="primary" style={{ marginBottom: '16px' }}>I'm ready to try</Button>
        <a href="mailto:i194mpvo@incoming.intercom.io">Want more information? - Let's talk!</a>
    </Section>
)

export default ScrolledToBottom
