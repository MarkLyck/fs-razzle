import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import fecha from 'fecha'
import _ from 'lodash'
import { statisticsId } from 'common/constants'
import withDashboard from 'components/withDashboard'
import withCharts from 'components/Charts/withCharts'
import StatisticsContainer from 'components/statisticsContainer'
import StatisticsBox from 'components/statisticsContainer/StatisticsBox'
import LoadingError from 'components/Error/LoadingError'
import GenericLoader from 'components/Loading/Generic'
import DAUGraph from './DAUGraph'
import VisitorStatistics from './VisitorStatistics'
import VisitorList from './VisitorList'

const date = new Date()
date.setDate(date.getDate() - 30)
const date30DaysAgo = fecha.format(date, 'YYYY-MM-DD')

const PANEL_QUERY = gql`
  query {
      visitorCount: _allVisitorsMeta {
        count
      }
      allVisitors(filter: {
        createdAt_gte: "${date30DaysAgo}",
      }) {
          id
          createdAt
          location
          device
          referrer
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
const uniqueVisitsFromOldSite = 0
const getPayingSubscribers = allUsers => allUsers && allUsers.filter(user => user.type === 'subscriber').length
const getActiveTrials = allUsers => allUsers && allUsers.filter(user => user.type === 'trial').length
const getTrialConversionRate = (allUsers, activeTrials) => {
  if (!allUsers) return 0
  const stayedThroughTrial = allUsers.filter(user => {
    // if user cancelled AFTER the trial ended.
    // or if the user is currently a paying subscriber
    if (
      (_.get(user, 'stripe.subscriptions.data[0].trial_end') &&
        user.stripe.subscriptions.data[0].canceled_at > user.stripe.subscriptions.data[0].trial_end) ||
      (!_.get(user, 'stripe.subscriptions.data[0].canceled_at') && user.type === 'subscriber')
    ) {
      return true
    }
    return false
  })
  // subtract active trials from the allUsers length as we don't know if they'll stay or not.
  const conversionRate = (stayedThroughTrial.length / (allUsers.length - activeTrials)) * 100
  return conversionRate
}

const Overview = ({ serialChartsReady, pieChartsReady }) => (
  <Query query={PANEL_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <GenericLoader />
      if (error) return <LoadingError error={error} />

      const { allUsers, allVisitors, visitorCount, Statistics } = data

      const uniqueVisitors = visitorCount ? visitorCount.count + uniqueVisitsFromOldSite : ''
      const activeTrials = getActiveTrials(allUsers)

      return (
        <React.Fragment>
          <StatisticsContainer>
            <StatisticsBox title="Unique visitors" value={uniqueVisitors} icon="users" />
            <StatisticsBox title="Subscribers" value={getPayingSubscribers(allUsers)} icon="flask" />
            <StatisticsBox title="Trials" value={activeTrials} icon="hourglass-half" />
            <StatisticsBox
              title="Trial conversion rate"
              value={`${getTrialConversionRate(allUsers, activeTrials)}%`}
              icon="hourglass-end"
            />
          </StatisticsContainer>
          <DAUGraph visitors={allVisitors} users={allUsers} serialChartsReady={serialChartsReady} />
          <VisitorStatistics statistics={Statistics} pieChartsReady={pieChartsReady} />
          <VisitorList visitors={allVisitors && allVisitors.slice().reverse()} />
        </React.Fragment>
      )
    }}
  </Query>
)

export default withDashboard(withCharts(Overview, { loadPieChart: true }))
