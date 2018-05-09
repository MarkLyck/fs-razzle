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
                    <Screenshot src="media/images/screenshots/suggestions.jpg" alt="" />
                </Left>
                <Right>
                    <p>
                        We offer weekly stock recommendations: what stocks to buy, at what price, how much of it to buy,
                        and when to sell them again<br /><br />

                        Use it to better your investment performance, as these recommendations offer something unusual:
                        higher expected reward along with a lower expected risk.<br /><br />

                        Using Formula Stocks is easy, too. After logging in you will find purchase and sales suggestions for stocks trading
                        on all US stock exchanges including large international stocks. These can be traded from anywhere in the world,
                        through any bank or broker you already use.<br /><br />

                        You can use these suggestions individually or choose to replicate our model portfolio. Simply follow the
                        instructions, and you will be handling your own account in no time at all.
                    </p>
                </Right>
            </Beside>
        </BesideContainer>
    </Section>
)

export default WhatIsIt
