import React from 'react'
import Section from 'components/Section'
import SectionTitle from 'components/Section/SectionTitle'
import Beside from 'components/Section/Beside'
import Disclaimer from 'components/Legal/Disclaimer'
import { BesideContainer, Pilot, Result } from './styles'

const PilotProgram = () => (
  <Section>
    <SectionTitle>Pilot program</SectionTitle>
    <BesideContainer>
      <Beside>
        <div>
          <p>
            Formula Stocks initiated a 3-year pilot program at launch. Performance data was recorded under real-time
            market conditions, and financial results reviewed by a state-licensed auditor. We recorded a return on
            equity employed to sustain securities trading of +78.94% in 2009, +44.64% in 2010 and +17.51% in 2011.<sup>
              *
            </sup>
          </p>
          <Disclaimer>
            <sup>*</sup>Past performance is not neccesarily indicative of future results.
          </Disclaimer>
        </div>
        <div>
          <Pilot>
            <p>Year 1</p>
            <Result>+78.94%</Result>
          </Pilot>
          <Pilot>
            <p>Year 2</p>
            <Result>+44.64%</Result>
          </Pilot>
          <Pilot>
            <p>Year 3</p>
            <Result>+17.51%</Result>
          </Pilot>
        </div>
      </Beside>
    </BesideContainer>
  </Section>
)

export default PilotProgram
