import React from 'react'
import withDashboard from 'components/withDashboard'
import withCharts from 'components/Charts/withCharts'

const Users = () => (
    <div className="users-panel">
        Users
    </div>
)

export default withDashboard(withCharts(Users))
