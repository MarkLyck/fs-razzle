import React, { Component } from 'react'
import withDashboard from 'components/withDashboard'
import withCharts from 'components/Charts/withCharts'
import gql from 'graphql-tag'
import { Query, Mutation } from 'react-apollo'
import { FileDrop, Container } from './styles'
import JSONIcon from './json_icon.svg'

const acceptedFilenames = [
  'annual_basic.json',
  'annual_entry.json',
  'annual_premium.json',
  'annual_business.json',
  'annual_fund.json',
  'monthly_basic.json',
  'monthly_entry.json',
  'monthly_premium.json',
  'monthly_business.json',
  'monthly_fund.json',
  'weekly_basic.json',
  'weekly_entry.json',
  'weekly_premium.json',
  'weekly_business.json',
  'weekly_fund.json',
]

const ALL_PLANS = gql`
  query {
    allPlans {
      id
      backtestedData
      latestSells
      name
      portfolio
      portfolioYields
      price
      statistics
      suggestions
      updatedAt
    }
  }
`

const UPDATE_PLAN = gql`
  mutation updatePlan(
    $id: ID!
    $backtestedData: Json
    $latestSells: Json
    $portfolio: Json
    $portfolioYields: Json
    $statistics: Json
    $launchStatistics: Json
    $suggestions: Json
  ) {
    updatePlan(
      id: $id
      backtestedData: $backtestedData
      latestSells: $latestSells
      portfolio: $portfolio
      portfolioYields: $portfolioYields
      statistics: $statistics
      launchStatistics: $launchStatistics
      suggestions: $suggestions
    ) {
      id
      name
      backtestedData
      latestSells
      portfolio
      portfolioYields
      statistics
      launchStatistics
      suggestions
    }
  }
`

class FileUploader extends Component {
  onDrop = files => {
    const badFiles = files.filter(
      file => acceptedFilenames.indexOf(file.name) === -1
    )

    if (!badFiles.length) {
      // actions.updatePlan(files, mutatePlan, allPlans)
    }
    return null
  }

  render() {
    return (
      <Query query={ALL_PLANS}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading</p>
          if (error || !data.allPlans)
            return <p>Failed fetching data, please try to refresh the page</p>
          return (
            <Mutation mutation={UPDATE_PLAN}>
              {(addTodo, { data }) => (
                <Container>
                  <h2>Update API</h2>
                  <FileDrop onDrop={this.onDrop} accept="application/json">
                    <h3>Drag and drop JSON files here</h3>
                    <JSONIcon />
                  </FileDrop>
                </Container>
              )}
            </Mutation>
          )
        }}
      </Query>
    )
  }
}

export default withDashboard(withCharts(FileUploader))
