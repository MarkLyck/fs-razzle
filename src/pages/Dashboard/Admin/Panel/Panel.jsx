import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import { statisticsId } from 'common/constants'
import withDashboard from 'components/withDashboard'
import withCharts from 'components/Charts/withCharts'

const PANEL_QUERY = gql`
  query {
      visitorCount: _allVisitorsMeta {
        count
      }
      allVisitors(filter: {
        createdAt_gte: "",
      }) {
          id
          createdAt
          location
          device
          url
      }
      allUsers {
        id
        createdAt
        name
        email
      }
      Statistics(id: "${statisticsId}") {
        id
        urls
        devices
        browsers
        countries
        os
      }
  }
`

const Overview = () => (
  <Query query={PANEL_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading</p>
      if (error || !data || !data.Plan)
        return <p>Something went wrong, please try to refresh</p>

      return <div>overview</div>
    }}
  </Query>
)

export default withDashboard(withCharts(Overview))
