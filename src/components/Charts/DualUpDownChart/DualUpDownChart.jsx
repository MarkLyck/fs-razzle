import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'emotion-theming'
import { PrimaryChart, SecondaryChart, ChartBeside, Statistic, ChartName, Line, Description } from './styles'

const DualUpDownChart = ({
  primaryStatistic,
  primaryPrefix = '',
  secondaryStatistic,
  secondaryPrefix = '',
  primaryHeight,
  secondaryHeight,
  primaryName,
  secondaryName,
  description,
  unit,
  theme,
}) => (
  <div>
    <ChartBeside>
      <PrimaryChart color={theme.colors.primary} height={Math.floor(primaryHeight)}>
        <Statistic>
          {primaryPrefix}
          {primaryStatistic}
          {unit}
        </Statistic>
        <ChartName>{primaryName}</ChartName>
      </PrimaryChart>
      <Line />
      <SecondaryChart color={theme.colors.black} height={Math.floor(secondaryHeight)}>
        <Statistic>
          {secondaryPrefix}
          {secondaryStatistic}
          {unit}
        </Statistic>
        <ChartName data-underneath>{secondaryName}</ChartName>
      </SecondaryChart>
    </ChartBeside>
    <Description>{description}</Description>
  </div>
)

DualUpDownChart.defaultProps = {
  primaryStatistic: 0,
  secondaryStatistic: 0,
  primaryHeight: 0,
  secondaryHeight: 0,
  primaryName: '',
  secondaryName: '',
  description: '',
  unit: '',
}

DualUpDownChart.propTypes = {
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

export default withTheme(DualUpDownChart)
