import React from 'react'
import Section from 'components/Section'
import SectionTitle from 'components/Section/SectionTitle'
import BrochureLink from 'components/BrochureLink'
import { List, ListItem } from './styles'

const HowWeBeatTheMarket = () => (
  <Section data-offwhite>
    <SectionTitle>How we beat the market</SectionTitle>
    <p>
      Formula Stocks uses a combination of many specific technologies developed over a 14- year period to do as Mark
      Twain originally suggested:<br />
      <br />
      ”Buy good quality common stocks that go up. If they do not go up, do not buy them”. While Twain said this
      tongue-in-cheek, it encapsulates what Formula Stocks strives to do.<br />
      <br />
      We identify stocks that go up, before they go up, with a 89-92% probability of being correct. Some of the
      techniques employed include in no specific order:
    </p>
    <List>
      <ListItem>
        <span>Cognitive computing</span> – the capability to learn from experience, and reason based upon it.
      </ListItem>
      <ListItem>
        <span>Business analytics</span> – the capability to analyze business models.
      </ListItem>
      <ListItem>
        <span>Margin of safety principles</span> – the concept of preferring extra safety before investing.
      </ListItem>
      <ListItem>
        <span>Valuation technology</span> – the concept of calculating the intrinsic value of a business.
      </ListItem>
      <ListItem>
        <span>The scientific method</span> – the method based upon which a thesis can be formed, tested, and refined.
      </ListItem>
      <ListItem>
        <span>Quantitative measurements</span> – a method with which to quantify a theory.
      </ListItem>
      <ListItem>
        <span>Growth projection</span> – a method with which to project the future growth of a business.
      </ListItem>
      <ListItem>
        <span>Intelligent Investment Technologies</span> – 93 different methods for outperforming the market.
      </ListItem>
      <ListItem>
        <span>Alpha prediction</span> – a method which estimates the future return from a stock.
      </ListItem>
      <ListItem>
        <span>Position-sizing logic</span> – the concept of matching position size and odds.
      </ListItem>
      <ListItem>
        <span>Portfolio management technology</span> – software for optimizing risk/reward characteristics of a
        portfolio.
      </ListItem>
    </List>
    <p>
      The complexity is high. Formula Stocks offers a leading-edge technological approach to stock selection and
      portfolio optimization. If you want to know more, please <BrochureLink>see our brochure</BrochureLink>.
    </p>
  </Section>
)

export default HowWeBeatTheMarket
