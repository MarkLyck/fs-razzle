import gql from 'graphql-tag'

export const ALL_PLANS = gql`
  query {
    allPlans {
      id
      backtestedData
      launchStatistics
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

export const UPDATE_PLAN = gql`
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
