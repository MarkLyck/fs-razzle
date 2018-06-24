import React from 'react'
import Script from 'react-load-script'

const withCharts = (Component, settings = {}) => {
  class WithCharts extends React.Component {
    state = {
      amChartsCoreStatus: false,
      amSerialChartsLoaded: false,
      amPieChartsLoaded: false,
      amChartsLoadingError: false,
    }

    amChartsSerialStatus = false
    amChartsPieStatus = false
    amChartsThemeStatus = false

    areChartDependenciesLoaded = () => {
      if (this.state.amChartsCoreStatus && this.amChartsThemeStatus) {
        if (this.amChartsSerialStatus) this.setState({ amSerialChartsLoaded: true })
        if (this.amChartsPieStatus) this.setState({ amPieChartsLoaded: true })
      }
    }

    onLoadAmChartsCore = () => {
      this.setState({ amChartsCoreStatus: true })
      this.areChartDependenciesLoaded()
    }

    onLoadAmChartsSerial = () => {
      this.amChartsSerialStatus = true
      this.areChartDependenciesLoaded()
    }

    onLoadAmChartsPie = () => {
      this.amChartsPieStatus = true
      this.areChartDependenciesLoaded()
    }

    onLoadAmChartsTheme = () => {
      this.amChartsThemeStatus = true
      this.areChartDependenciesLoaded()
    }

    render() {
      const { amChartsCoreStatus, amSerialChartsLoaded, amPieChartsLoaded, amChartsLoadingError } = this.state

      return (
        <React.Fragment>
          <Component
            serialChartsReady={amSerialChartsLoaded}
            pieChartsReady={amPieChartsLoaded}
            chartError={amChartsLoadingError}
            {...this.props}
          />
          <Script url="https://www.amcharts.com/lib/3/amcharts.js" onLoad={this.onLoadAmChartsCore} />
          {amChartsCoreStatus ? (
            <React.Fragment>
              <Script url="https://www.amcharts.com/lib/3/serial.js" onLoad={this.onLoadAmChartsSerial} />
              <Script url="https://www.amcharts.com/lib/3/themes/light.js" onLoad={this.onLoadAmChartsTheme} />
              {settings.loadPieChart && (
                <Script url="https://www.amcharts.com/lib/3/pie.js" onLoad={this.onLoadAmChartsPie} />
              )}
            </React.Fragment>
          ) : null}
        </React.Fragment>
      )
    }
  }

  return WithCharts
}

export default withCharts
