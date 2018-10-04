import React from 'react'
import { Element } from 'react-scroll'
import Section from 'components/Section'
import SectionTitle from 'components/Section/SectionTitle'
import BrochureLink from 'components/BrochureLink'
import { List, ListItem } from './styles'

const HowWeBeatTheMarket = () => (
  <Section data-offwhite>
    <Element name="how-it-works" />
    <SectionTitle>How we beat the market</SectionTitle>
    <p>
      Formula Stocks uses a combination of many specific technologies developed over a 15- year period to do as Mark
      Twain originally suggested:
      <br />
      <br />
      ”Buy good quality common stocks that go up. If they do not go up, do not buy them”. While Twain said it
      tongue-in-cheek, it encapsulates Formula Stocks' mission.
      <br />
      <br />
      We identify stocks that go up, before they go up, with a 88-92% probability of being correct. We do this using
      novel technology developed in-house, including state of the art artificial intelligence. A few of these concepts
      are:
    </p>
    <List>
      <ListItem>
        <span>Artificial Intelligence</span> – the capability for an algorithm to learn from experience, and reason
        based upon it.
      </ListItem>
      <ListItem>
        <span>Quantitative business analytics</span> – analyzing business models using big data.
      </ListItem>
      <ListItem>
        <span>Growth projection</span> – in-house methods used to project the future non-linear growth of a business.
      </ListItem>
      <ListItem>
        <span>Margin of safety principles</span> – safety seen as a prerequisite to intelligent investing as pioneered
        by Benjamin Graham.
      </ListItem>
      <ListItem>
        <span>Valuation technologies</span> – novel methods for calculating the intrinsic value of a business.
      </ListItem>
      <ListItem>
        <span>Intelligent Investment Technologies </span> – approx. 100 different methods for outperforming the market
        developed in-house
      </ListItem>
      <ListItem>
        <span>Alpha prediction</span> – in-house method which estimates the future excess return from a stock.
      </ListItem>
      <ListItem>
        <span>Portfolio management technology</span> – software for optimizing risk/reward characteristics of a
        portfolio.
      </ListItem>
      <ListItem>
        <span>The scientific method</span> – everything is based on the central method upon which a thesis can be
        formed, tested, and refined.
      </ListItem>
    </List>
    <p>
      Formula Stocks offers leading-edge technology for modern stock selection and portfolio optimization. If you want
      to know more, please <BrochureLink>see our brochure</BrochureLink>.
    </p>
  </Section>
)

export default HowWeBeatTheMarket
