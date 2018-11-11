import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LineGraph from 'components/Charts/LineGraph'
import { Legends, Legend } from 'components/Charts/Legends/Legends'
import { formatPrice } from 'common/utils/helpers'
import theme from 'common/utils/theme'
import { GraphContainer } from './styles'

const createChartData = (portfolioYields, marketPrices) => {
  const startValue = portfolioYields[0].balance
  const marketStartValue = marketPrices.length ? Number(marketPrices[0].price) : 0

  return portfolioYields.map((point, i) => {
    const balance = (((portfolioYields[i].balance - startValue) / startValue) * 100).toFixed(2)
    const marketBalance = marketPrices[i]
      ? (((Number(marketPrices[i].price) - marketStartValue) / marketStartValue) * 100).toFixed(2)
      : Number(marketPrices[marketPrices.length - 1].price)

    const month = Number(point.date.month) > 9 ? point.date.month : `0${point.date.month}`

    return {
      market: Number(marketBalance) || 0,
      fs: Number(balance),
      fsBalloon: formatPrice(balance, true, true),
      marketBalloon: formatPrice(marketBalance, true, true),
      date: `${point.date.year}-${month}-${point.date.day}`,
    }
  })
}

const LaunchPerformance = ({ portfolioYields, marketPrices, planName, amChartsLoaded }) => {
  if (!portfolioYields || !marketPrices.length || !portfolioYields.length || !amChartsLoaded) {
    return <FontAwesomeIcon icon="spinner-third" spin size="4x" />
  }
  const chartData = createChartData(portfolioYields, marketPrices)

  const fsMin = _.minBy(chartData, point => point.fs).fs
  const marMin = chartData[0].market ? _.minBy(chartData, point => point.market).market : 0

  const minimum = Math.floor(_.min([fsMin, marMin]) / 10) * 10
  const maximum = Math.ceil(_.maxBy(chartData, point => point.fs).fs / 20) * 20

  const graphs = [
    {
      id: 'launch',
      lineColor: '#27A5F9',
      fillAlphas: 0.4,
      bullet: 'square',
      bulletBorderAlpha: 1,
      bulletColor: '#27A5F9',
      bulletSize: 5,
      hideBulletsCount: 10,
      lineThickness: 2,
      useLineColorForBulletBorder: true,
      valueField: 'fs',
      balloonText: `
                <div class="chart-balloon">
                    <span class="plan-name">${planName}</span>
                    <span class="balloon-value">[[fsBalloon]]</span>
                </div>`,
    },
  ]
  if (marketPrices.length) {
    graphs.push({
      id: 'market',
      lineColor: '#49494A',
      fillAlphas: 0.4,
      bullet: 'square',
      bulletBorderAlpha: 1,
      bulletColor: '#989898',
      bulletSize: 5,
      hideBulletsCount: 10,
      lineThickness: 2,
      useLineColorForBulletBorder: true,
      valueField: 'market',
      balloonText: `
                <div class="chart-balloon">
                    <span class="plan-name market-name">DJIA</span>
                    <span class="balloon-value">[[marketBalloon]]</span>
                </div>`,
    })
  }

  return (
    <GraphContainer>
      <Legends>
        <Legend color={theme.colors.primary}>
          <p>{planName}</p>
        </Legend>
        <Legend color={theme.colors.black}>
          <p>DJIA</p>
        </Legend>
      </Legends>
      <LineGraph
        id="single-launch-performace-graph"
        graphs={graphs}
        data={chartData}
        unit="%"
        unitPosition="right"
        autoMargins={false}
        marginRight={-3}
        marginBottom={-6}
        insideX
        insideY
        axisAlpha={0}
        gridOpacity={0.02}
        categoryBoldLabels={true}
        categoryAxisColor="#FFF"
        maximum={maximum}
        minimum={minimum}
      />
    </GraphContainer>
  )
}

LaunchPerformance.defaultProps = {
  portfolioYields: [],
  DJIA: [],
  planName: '',
}

LaunchPerformance.propTypes = {
  portfolioYields: PropTypes.array,
  marketPrices: PropTypes.array,
  planName: PropTypes.string,
}

export default LaunchPerformance
