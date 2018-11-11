import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LineGraph from 'components/Charts/LineGraph'
import theme from 'common/utils/theme'
import { GraphContainer, LoadingContainer, FailedContainer } from './styles'

const createChartData = historicPrices =>
  historicPrices.map(point => ({
    price: point[1],
    date: point[0],
  }))

const StockChart = ({ historicPrices, ticker, costBasisPrice, action, serialChartsReady, loading, error }) => {
  if (!serialChartsReady || loading) {
    return (
      <LoadingContainer>
        <FontAwesomeIcon icon="spinner-third" spin />
        <h4>Loading</h4>
      </LoadingContainer>
    )
  } else if ((!loading && !historicPrices.length) || error) {
    return (
      <FailedContainer>
        <FontAwesomeIcon icon="chart-line" />
        <h4>No graph data available</h4>
      </FailedContainer>
    )
  }
  const chartData = createChartData(historicPrices)

  let guideColor = theme.colors.primary
  let color = { positive: theme.colors.primary, negative: theme.colors.black }
  const cursorColor = theme.colors.black

  if (action === 'SELL') {
    color = { negative: theme.colors.secondary, positive: theme.colors.black }
    guideColor = theme.colors.secondary
  }

  const graphs = [
    {
      id: ticker,
      lineColor: color.negative,
      negativeLineColor: color.positive,
      negativeBase: costBasisPrice + 0.001,
      fillAlphas: 0,
      bullet: 'square',
      bulletBorderAlpha: 1,
      bulletColor: '#FFFFFF',
      bulletSize: 5,
      hideBulletsCount: 10,
      lineThickness: 2,
      useLineColorForBulletBorder: true,
      valueField: 'price',
      balloonText: `
                <div class="chart-balloon">
                    <span class="${action}-ticker-name ticker-name">${ticker}</span>
                    <span class="balloon-value">$[[price]]</span>
                </div>`,
    },
  ]

  const guides = [
    {
      value: costBasisPrice + 0.001,
      lineColor: guideColor,
      lineAlpha: 0.4,
      lineThickness: 1,
      position: 'right',
    },
  ]

  return (
    <GraphContainer>
      <LineGraph
        id={`${ticker.toLowerCase()}-stockgraph`}
        className="stock-graph"
        graphs={graphs}
        data={chartData}
        unit="$"
        insideY
        axisAlpha={0}
        gridOpacity={0.02}
        cursorColor={cursorColor}
        guides={guides}
      />
    </GraphContainer>
  )
}

StockChart.propTypes = {
  sixMonthsPrices: PropTypes.array,
  ticker: PropTypes.string,
  action: PropTypes.string,
  suggestedPrice: PropTypes.number,
  stockFetchFailed: PropTypes.bool,
}

export default StockChart
