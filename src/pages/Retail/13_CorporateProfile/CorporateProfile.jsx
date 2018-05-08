import React from 'react'
import Card from 'material-ui/Card'
import Section from 'components/Section'
import SectionTitle from 'components/Section/SectionTitle'
import Beside from 'components/Section/Beside'
import Left from 'components/Section/Beside/Left'
import Right from 'components/Section/Beside/Right'
import { cardStyle, ProfileImg, ProfileTextContainer, ExecutiveTeam } from './styles'

const CorporateProfile = () => (
    <Section data-offwhite>
        <SectionTitle>Corporate profile</SectionTitle>
        <Beside>
            <Left>
                <h3>About us</h3>
                <p>
                    Formula Stocks develops cognitive computing technologies since 2003 designed to achieve above-average performance
                    in equity markets. Technology includes learning, business analytics, decisionmaking, probability estimation,
                    and prediction technologies. Products suites can be used as a standalone tool to assist investors,
                    or operate as autonomous decisionmakers, artificial intelligence capable of portfolio construction,
                    active portfolio management, risk/reward management.<br /><br />

                    Address: Formula Stocks ApS | Ribe Landevej 39, DK-6100 Haderslev. Denmark<br /><br />

                    Contact us at: <a href="mailto:info@formulastocks.com">info@formulastocks.com</a>
                </p>
            </Left>
            <Right>
                <ExecutiveTeam>Executive team</ExecutiveTeam>
                <Card style={cardStyle}>
                    <ProfileImg src="media/images/corporate/Thomas.jpg" alt="" />
                    <ProfileTextContainer>
                        <h5>Thomas Lyck</h5>
                        <p>CEO</p>
                    </ProfileTextContainer>
                </Card>
                <Card style={cardStyle}>
                    <ProfileImg src="media/images/corporate/Mark.jpg" alt="" />
                    <ProfileTextContainer>
                        <h5>Mark Lyck</h5>
                        <p>COO</p>
                    </ProfileTextContainer>
                </Card>
                <Card style={cardStyle}>
                    <ProfileImg src="media/images/corporate/Marie.jpg" alt="" />
                    <ProfileTextContainer>
                        <h5>Marie Lauritzen</h5>
                        <p>CHRO</p>
                    </ProfileTextContainer>
                </Card>
            </Right>
        </Beside>
    </Section>
)

export default CorporateProfile
