import React from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import PieChart from 'components/Charts/PieChart'
import { ContainerStyle, PieChartsContainer, ChartContainer } from './styles'

const createChartData = data =>
  Object.entries(data).map(obj => ({ title: obj[0], value: obj[1] }))

const Statistics = ({ statistics, pieChartsReady }) => {
  if (!pieChartsReady || !statistics) return ''
  return (
    <Paper style={ContainerStyle}>
      Statistics
      <PieChartsContainer>
        <ChartContainer>
          <PieChart
            title="Browsers"
            id="vst-browsers"
            data={createChartData(statistics.browsers)}
          />
          <h3>Browsers</h3>
        </ChartContainer>
        <ChartContainer>
          <PieChart
            title="Devices"
            id="vst-devices"
            data={createChartData(statistics.devices)}
          />
          <h3>Devices</h3>
        </ChartContainer>
        <ChartContainer>
          <PieChart
            title="OS"
            id="vst-os"
            data={createChartData(statistics.os)}
          />
          <h3>OS</h3>
        </ChartContainer>
        <ChartContainer>
          <PieChart
            title="Referrers"
            id="vst-referrers"
            data={createChartData(statistics.urls)}
          />
          <h3>Referrers</h3>
        </ChartContainer>
      </PieChartsContainer>
    </Paper>
  )
}
Statistics.propTypes = {
  statistics: PropTypes.object,
}

export default Statistics
