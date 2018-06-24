import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'emotion-theming'
import { Chart, ChartBeside, Statistic, ChartName, Description } from './styles'

const DualBarChart = ({
  primaryStatistic,
  secondaryStatistic,
  primaryHeight,
  secondaryHeight,
  primaryName,
  secondaryName,
  maxHeight,
  description,
  unit,
  theme,
}) => (
  <div className="chart-container">
    <ChartBeside maxHeight={maxHeight}>
      <Chart color={theme.colors.primary} height={Math.floor(primaryHeight)}>
        <Statistic>
          {primaryStatistic}
          {unit}
        </Statistic>
        <ChartName>{primaryName}</ChartName>
      </Chart>
      <Chart color={theme.colors.black} height={Math.floor(secondaryHeight)}>
        <Statistic>
          {secondaryStatistic}
          {unit}
        </Statistic>
        <ChartName>{secondaryName}</ChartName>
      </Chart>
    </ChartBeside>
    <Description>{description}</Description>
  </div>
)

DualBarChart.defaultProps = {
  primaryStatistic: 0,
  secondaryStatistic: 0,
  primaryHeight: 0,
  secondaryHeight: 0,
  primaryName: '',
  secondaryName: '',
  description: '',
  unit: '',
}

DualBarChart.propTypes = {
  primaryStatistic: PropTypes.number.isRequired,
  secondaryStatistic: PropTypes.number.isRequired,
  primaryName: PropTypes.string.isRequired,
  secondaryName: PropTypes.string.isRequired,
  primaryHeight: PropTypes.number.isRequired,
  secondaryHeight: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  unit: PropTypes.string,
  theme: PropTypes.object.isRequired,
}

export default withTheme(DualBarChart)
