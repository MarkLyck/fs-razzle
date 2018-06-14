import React from 'react'
import PropTypes from 'prop-types'
import { Statistics } from './styles'

const StatisticsContainer = ({ children }) => <Statistics>{children}</Statistics>

StatisticsContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default StatisticsContainer
