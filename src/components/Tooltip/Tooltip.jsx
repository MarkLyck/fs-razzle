import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TooltipContainer } from './styles'

const Tooltip = ({ tip, width }) => (
  <TooltipContainer tip={tip} width={width}>
    <FontAwesomeIcon icon="question-circle" />
  </TooltipContainer>
)

export default Tooltip
