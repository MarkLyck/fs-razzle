import React from 'react'
import PropTypes from 'prop-types'
import LineGraph from 'components/Charts/LineGraph'
import theme from 'common/utils/theme'
import { GraphContainer, LoadingContainer, FailedContainer } from './styles'

const createChartData = sixMonthsPrices => sixMonthsPrices.map(point => ({
    price: point[1],
    date: point[0],
}))

const StockChart = ({ sixMonthsPrices, ticker, suggestedPrice, action, stockFetchFailed, serialChartsReady }) => {
    if (!serialChartsReady || (!stockFetchFailed && (!sixMonthsPrices || !sixMonthsPrices.length || !ticker))) {
        return (
            <LoadingContainer>
                <i className="fa fa-spinner-third fa-spin fa-3x fa-fw" />
                <h4>Loading</h4>
            </LoadingContainer>
        )
    } else if (stockFetchFailed) {
        return (
            <FailedContainer>
                <i className="fa fa-exclamation-circle fa-2x" />
                {/* <i className="fa fa-info fa-spin fa-3x fa-fw" /> */}
                <h4>No graph data available</h4>
            </FailedContainer>
        )
    }
    const chartData = createChartData(sixMonthsPrices)

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
            negativeBase: suggestedPrice + 0.001,
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

    const guides = [{
        value: suggestedPrice + 0.001,
        lineColor: guideColor,
        lineAlpha: 0.4,
        lineThickness: 1,
        position: 'right',
    }]

    return (
        <GraphContainer>
            <LineGraph
                id={`${ticker.toLowerCase()}-stockgraph`}
                className="suggestion-graph"
                graphs={graphs}
                data={chartData}
                unit="$"
                insideY
                axisAlpha={0}
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
