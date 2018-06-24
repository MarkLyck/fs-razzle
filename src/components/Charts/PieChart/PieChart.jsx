import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PieChart extends Component {
  componentDidMount() {
    this.makeChart()
  }

  componentDidUpdate() {
    this.makeChart()
  }

  getConfig = () => {
    const { data, unit = '', colors = [] } = this.props

    const config = {
      type: 'pie',
      dataProvider: data,
      titleField: 'title',
      valueField: 'value',
      balloonText: `[[title]]<br/>[[value]]${unit}`,
      radius: '40%',
      innerRadius: '70%',
      labelsEnabled: false,
      balloon: {
        fillAlpha: 1,
      },
      colors,
    }

    return config
  }

  makeChart = () => {
    const { id, data } = this.props
    const config = this.getConfig()
    if (data.length && typeof window !== 'undefined') {
      window.AmCharts.makeChart(id, { ...config })
    }
  }

  render() {
    const { id, className } = this.props
    return <div id={id} className={className} />
  }
}

PieChart.defaultProps = {
  data: [],
  graphs: [],
  unit: '',
  className: '',
}

PieChart.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  data: PropTypes.array,
  unit: PropTypes.string,
  colors: PropTypes.array,
}

export default PieChart
