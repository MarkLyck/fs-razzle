import React from 'react'
import withDashboard from 'components/withDashboard'
import withCharts from 'components/Charts/withCharts'

const API = () => (
    <div className="API-panel">
        API
    </div>
)

export default withDashboard(withCharts(API))
