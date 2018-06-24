import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import withDashboard from 'components/withDashboard'
import { HeaderImage, Title, Body } from './styles'

const ARTICLE_QUERY = gql`
  query ArticleQuery($title: String) {
    allArticles(filter: { title: $title }) {
      title
      body
      headerImageUrl
    }
  }
`

const Article = () => (
  <Query query={ARTICLE_QUERY} variables={{ title: 'test' }}>
    {({ loading, error, data }) => {
      if (loading) return <div>loading</div>
      if (error) return <div>Error</div>

      const article = data.allArticles[0]

      return (
        <div>
          <HeaderImage data-headerimageurl={article.headerImageUrl} />
          <Title>{article.title}</Title>
          <Body dangerouslySetInnerHTML={{ __html: article.body }} />
        </div>
      )
    }}
  </Query>
)

export default withDashboard(Article)
