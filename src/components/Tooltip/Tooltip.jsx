import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TooltipContainer } from './styles'

const Tooltip = ({ tip, width, position }) => (
  <TooltipContainer tip={tip} width={width} position={position} className="tooltip-container">
    <FontAwesomeIcon icon="question-circle" />
  </TooltipContainer>
)

export default Tooltip
