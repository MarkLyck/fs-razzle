import React from 'react'
import withDashboard from 'components/withDashboard'
import withCharts from 'components/Charts/withCharts'

const Overview = () => (
    <div className="overview-panel">
        Overview panel
    </div>
)

export default withDashboard(withCharts(Overview))
