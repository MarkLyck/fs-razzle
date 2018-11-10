import React, { Component } from 'react'
import PropTypes from 'prop-types'
import platform from 'platform'

class LineGraph extends Component {
  componentDidMount() {
    this.makeChart()
  }

  componentDidUpdate() {
    this.makeChart()
  }

  getConfig = () => {
    const {
      data,
      graphs,
      chartTheme,
      unit,
      unitPosition,
      minimum,
      maximum,
      baseValue,
      logarithmic,
      minorGridEnabled,
      autoMargins = true,
      marginLeft = 0,
      marginRight = 0,
      marginTop = 0,
      marginBottom = 0,
      guides,
      axisAlpha,
      categoryBoldLabels = false,
      categoryAxisColor = '#000000',
      gridOpacity = 0.15,
      cursorColor,
      insideX,
      labelYOffset = 0,
    } = this.props
    let { insideY } = this.props

    if (!insideY && typeof window !== 'undefined' && window.innerWidth < 550) {
      insideY = true
    }
    const config = {
      type: 'serial',
      theme: chartTheme || 'light',
      addClassNames: true,
      dataProvider: data,
      autoMargins,
      marginLeft: marginLeft,
      marginRight: marginRight,
      marginTop: marginTop,
      marginBottom: marginBottom,
      balloon: {
        color: '#49494A',
        fillAlpha: 1,
        borderColor: '#27A5F9',
        borderThickness: 2,
      },
      graphs,
      valueAxes: [
        {
          axisAlpha: axisAlpha || 0,
          logarithmic,
          unit,
          unitPosition: unitPosition || 'left',
          gridAlpha: gridOpacity,
          minorGridEnabled,
          dashLength: 0,
          inside: insideY,
          labelOffset: labelYOffset,
          baseValue: baseValue || 0,
          minimum,
          maximum,
          strictMinMax: true,
        },
      ],
      guides: guides || [],
      chartCursor: {
        valueLineEnabled: true,
        valueLineAlpha: 0.5,
        cursorAlpha: 0.5,
        cursorColor: cursorColor || '#49494A',
      },
      categoryField: 'date',
      categoryAxis: {
        boldLabels: categoryBoldLabels,
        color: categoryAxisColor,
        parseDates: true,
        equalSpacing: true,
        inside: insideX,
        gridAlpha: gridOpacity,
        axisAlpha: axisAlpha || 0,
      },
      export: {
        enabled: false,
      },
    }
    if (platform.name === 'Safari') {
      config.dataDateFormat = 'YYYY-M-D'
      config.categoryAxis = {
        equalSpacing: false,
      }
    }
    return config
  }

  makeChart = () => {
    const { id, data, graphs } = this.props
    const config = this.getConfig()
    if (data.length && graphs.length) {
      if (typeof window !== 'undefined') {
        window.AmCharts.makeChart(id, { ...config })
      }
    }
  }

  render() {
    const { id, className } = this.props
    return <div id={id} className={className} style={{ width: '100%' }} />
  }
}

LineGraph.defaultProps = {
  data: [],
  graphs: [],
  className: '',
}

LineGraph.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  data: PropTypes.array,
  graphs: PropTypes.array,
  chartTheme: PropTypes.string,
  unit: PropTypes.string,
  unitPosition: PropTypes.any,
  minimum: PropTypes.number,
  maximum: PropTypes.number,
  baseValue: PropTypes.number,
  logarithmic: PropTypes.bool,
  minorGridEnabled: PropTypes.bool,
  autoMargins: PropTypes.bool,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  guides: PropTypes.array,
  axisAlpha: PropTypes.number,
  categoryBoldLabels: PropTypes.bool,
  categoryAxisColor: PropTypes.string,
  gridOpacity: PropTypes.number,
  cursorColor: PropTypes.string,
  insideY: PropTypes.bool,
  insideX: PropTypes.bool,
}

export default LineGraph
