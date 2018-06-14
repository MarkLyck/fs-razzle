import React from 'react'
import { Link } from 'react-router-dom'
import Section from 'components/Section'
import SectionTitle from 'components/Section/SectionTitle'
import BrochureLink from 'components/BrochureLink'

const IntendedAudience = () => (
  <Section>
    <SectionTitle>Intended audience</SectionTitle>
    <p>
      This page is an introduction to Formula Stocks and our Entry membership. No experience or background is required.
      If you are an experienced, technically advanced, or professionel investor, you might prefer to see our pages with
      additional technical, in-depth information, which at the same time requires more background knowledge.<br />
      <br />
      For deeper technical information <BrochureLink>click here to download our brochure.</BrochureLink>
      <br />
      <br />
      For institutional and professional services please <Link to="/pro">click here</Link>.
    </p>
  </Section>
)

export default IntendedAudience
