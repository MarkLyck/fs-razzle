import React from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import GenericLoader from 'components/Loading/Generic'
import LoadingError from 'components/Error/LoadingError'
import ArticleCard from './ArticleCard'
import { ArticlesList } from './styles'

const ARTICLES_QUERY = gql`
  query {
    allArticles {
      title
      body
      headerImageUrl
    }
  }
`

const Articles = ({ location }) => (
  <Query query={ARTICLES_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <GenericLoader />
      if (error) return <LoadingError />

      return (
        <ArticlesList>
          {data.allArticles.map(article => <ArticleCard article={article} key={article.title} location={location} />)}
        </ArticlesList>
      )
    }}
  </Query>
)

Articles.propTypes = {
  allArticles: PropTypes.array,
}

export default Articles
