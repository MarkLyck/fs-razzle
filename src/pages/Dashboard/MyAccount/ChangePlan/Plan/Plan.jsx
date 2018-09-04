import React from 'react'
import { css } from 'emotion'
import Disclaimer from 'components/Legal/Disclaimer'
import { PlanContainer, Price } from './styles'

const Plan = ({ name, price, cycle, currentPlan, selectedPlan, onClick }) => {
  const isCurrent = name.toUpperCase() === currentPlan.toUpperCase()
  const isSelected = selectedPlan.toUpperCase() === name.toUpperCase()

  return (
    <PlanContainer
      onClick={onClick}
      className={
        isSelected &&
        !isCurrent &&
        css`
          background: #27a5f9;
          color: white;

          &:hover {
            color: white;
          }
        `
      }
    >
      <h3 className={isCurrent ? 'is-current' : ''}>{name}</h3>
      {isCurrent ? (
        <Price className={isCurrent ? 'is-current' : ''}>Current</Price>
      ) : (
        <Price className={isCurrent ? 'is-current' : ''}>
          ${price.toLocaleString()}
          <br />
          <Disclaimer>{cycle}</Disclaimer>
        </Price>
      )}
    </PlanContainer>
  )
}

export default Plan
