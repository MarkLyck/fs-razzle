import React from 'react'
import withDashboard from 'components/withDashboard'
import withCharts from 'components/Charts/withCharts'

const NewArticle = () => (
    <div className="overview-panel">
        New ARticle
    </div>
)

export default withDashboard(withCharts(NewArticle))
