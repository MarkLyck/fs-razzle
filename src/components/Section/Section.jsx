import React from 'react'
import { css } from 'emotion'
import styled from 'react-emotion'
import PropTypes from 'prop-types'
import mq from 'common/utils/mq'

export const Section = styled.div`
  background: ${props => (props['data-offwhite'] ? props.theme.colors.polar : '#fff')};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 40px 80px;
  ${mq.medium(css`
    padding: 40px 32px;
  `)};
`

const SectionContent = styled.div`
  max-width: 1160px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.5;
`

const Sect = props => (
  <Section theme={props.theme} data-offwhite={props['data-offwhite']}>
    <SectionContent>{props.children}</SectionContent>
  </Section>
)

Sect.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.node,
  'data-offwhite': PropTypes.bool,
}

export default Sect
