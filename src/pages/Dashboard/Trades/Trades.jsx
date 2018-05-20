import React from 'react'

import withDashboard from 'components/withDashboard'
import withCharts from 'components/Charts/withCharts'

const Trades = () => (
    <div className="trades-page">
        Trades
    </div>
)

export default withDashboard(withCharts(Trades))
