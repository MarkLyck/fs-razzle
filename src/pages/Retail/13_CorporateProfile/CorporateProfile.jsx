import React from 'react'
import Section from 'components/Section'
import SectionTitle from 'components/Section/SectionTitle'
import Beside from 'components/Section/Beside'
import Left from 'components/Section/Beside/Left'
import Right from 'components/Section/Beside/Right'
import { BesideContainer, Card, ProfileImg, ProfileTextContainer, Subtitle } from './styles'

const CorporateProfile = () => (
  <Section data-offwhite>
    <SectionTitle>Corporate profile</SectionTitle>
    <BesideContainer>
      <Beside>
        <Left>
          <Subtitle>About us</Subtitle>
          <p>
            Formula Stocks develops cognitive computing technologies since 2003 designed to achieve above-average
            performance in equity markets. Technology includes deep learning, business analytics, decisionmaking,
            probability estimation, and prediction technologies. Product suites can be used as a standalone tool to
            assist investors, or operate as autonomous decisionmakers. Artificial intelligence fund management solutions
            capable of portfolio construction, portfolio management & risk/reward management.
            <br />
            <br />
            Address: Formula Stocks ApS | Ribe Landevej 39, DK-6100 Haderslev. Denmark
            <br />
            <br />
            Contact us at: <a href="mailto:info@formulastocks.com">info@formulastocks.com</a>
          </p>
        </Left>

        <Right>
          <Subtitle>Executive team</Subtitle>
          <Card>
            <ProfileImg
              srcset="media/images/corporate/Thomas.jpg,
             media/images/corporate/Thomas@2x.jpg 2x"
              src="media/images/corporate/Thomas.jpg"
              alt=""
            />
            <ProfileTextContainer>
              <h5>Thomas Lyck</h5>
              <p>CEO</p>
            </ProfileTextContainer>
          </Card>
          <Card>
            <ProfileImg
              srcset="media/images/corporate/Mark.jpg,
             media/images/corporate/Mark@2x.jpg 2x"
              src="media/images/corporate/Mark.jpg"
              alt=""
            />
            <ProfileTextContainer>
              <h5>Mark Lyck</h5>
              <p>COO</p>
            </ProfileTextContainer>
          </Card>
          <Card>
            <ProfileImg
              srcset="media/images/corporate/Marie.jpg,
             media/images/corporate/Marie@2x.jpg 2x"
              src="media/images/corporate/Marie.jpg"
              alt=""
            />
            <ProfileTextContainer>
              <h5>Marie Lauritzen</h5>
              <p>CHRO</p>
            </ProfileTextContainer>
          </Card>
        </Right>
      </Beside>
    </BesideContainer>
  </Section>
)

export default CorporateProfile
