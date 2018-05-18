import React from 'react'

import withDashboard from 'components/withDashboard'
import withCharts from 'components/Charts/withCharts'

const Portfolio = () => (
    <div className="portfolio-page">
        Portfolio
    </div>
)

export default withDashboard(withCharts(Portfolio))
