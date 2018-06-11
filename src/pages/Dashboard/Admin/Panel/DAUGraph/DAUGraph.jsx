import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import _ from 'lodash'
import LineGraph from 'components/Charts/LineGraph'
import Paper from 'material-ui/Paper'
import { GraphContainer, ContainerStyle } from './styles'

const createChartData = (visitors, users) => {
  // gets signup dates from all users
  const signUpDays = _.countBy(users, user =>
    moment(user.createdAt).format('YYYY-MM-DD')
  )

  const cancelDays = _.countBy(users, user =>
    moment
      .unix(_.get(user, 'stripe.subscriptions.data[0].canceled_at'))
      .format('YYYY-MM-DD')
  )

  const visitorData = _.countBy(visitors, visitor =>
    moment(visitor.createdAt).format('YYYY-MM-DD')
  )

  const days = []
  for (let i = 0; i <= 30; i++) {
    days.push(
      moment()
        .subtract(30 - i, 'days')
        .format('YYYY-MM-DD')
    )
  }

  return days.map(date => ({
    date,
    visitors: visitorData[date] || 0,
    signUps: signUpDays[date] || 0,
    cancelations: cancelDays[date] || 0,
  }))
}

const DAUGraph = ({ visitors, users, serialChartsReady }) => {
  if (!serialChartsReady || (!visitors.length && !users.length)) {
    return (
      <div id="result-chart" className="loading">
        <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw" />
      </div>
    )
  }
  const chartData = createChartData(visitors, users)

  const graphs = [
    {
      id: 'firstVisits',
      lineColor: '#12D99E',
      fillAlphas: 0.8,
      type: 'smoothedLine',
      valueField: 'visitors',
      balloonText:
        '<div class="suggestion-balloon"><p class="ticker">New visitors</p> <p>[[value]]</p></div>',
    },
    {
      alphaField: 'alpha',
      balloonText:
        '<div class="suggestion-balloon"><p class="ticker">Signups:</p> <p>[[value]]</p></div>',
      lineColor: '#27A5F9',
      fillAlphas: 0.6,
      type: 'smoothedLine',
      valueField: 'signUps',
    },
    {
      alphaField: 'alpha',
      balloonText:
        '<div class="suggestion-balloon"><p class="ticker">cancelled:</p> <p>[[value]]</p></div>',
      lineColor: '#EC1B5F',
      fillAlphas: 0.5,
      clustered: false,
      type: 'smoothedLine',
      valueField: 'cancelations',
    },
  ]

  return (
    <Paper style={ContainerStyle}>
      <GraphContainer>
        <LineGraph
          id="dau-graph"
          graphs={graphs}
          data={chartData}
          axisAlpha={0.5}
        />
      </GraphContainer>
    </Paper>
  )
}

DAUGraph.propTypes = {
  visitors: PropTypes.array,
  users: PropTypes.array,
}

export default DAUGraph
