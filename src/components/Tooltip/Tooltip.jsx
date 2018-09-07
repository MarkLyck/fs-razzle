import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TooltipContainer } from './styles'

const Tooltip = ({ tip }) => (
  <TooltipContainer tip={tip}>
    <FontAwesomeIcon icon="question-circle" />
  </TooltipContainer>
)

export default Tooltip
