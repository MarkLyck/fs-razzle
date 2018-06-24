import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'emotion-theming'
import { SectionTitleContainer, Title, Divider } from './styles'

const SectionTitle = ({ children }) => (
  <SectionTitleContainer>
    <Title>{children}</Title>
    <Divider />
  </SectionTitleContainer>
)

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withTheme(SectionTitle)
