import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import GenericLoader from 'components/Loading/Generic'
import LoadingError from 'components/Error/LoadingError'
import withDashboard from 'components/withDashboard'
import { ArticleContainer, HeaderImage, Title, Body } from './styles'

const ARTICLE_QUERY = gql`
  query ArticleQuery($title: String) {
    allArticles(filter: { title: $title }) {
      title
      body
      headerImageUrl
    }
  }
`

const Article = ({ location }) => {
  const locationArr = location.pathname.split('/')
  const articleTitle = locationArr[locationArr.length - 1].split('-').join(' ')

  return (
    <Query query={ARTICLE_QUERY} variables={{ title: articleTitle }}>
      {({ loading, error, data }) => {
        if (loading) return <GenericLoader />
        if (error) return <LoadingError />

        const article = data.allArticles[0]

        return (
          <ArticleContainer>
            <HeaderImage data-headerimageurl={article.headerImageUrl} />
            <Title>{article.title}</Title>
            <Body dangerouslySetInnerHTML={{ __html: article.body }} />
          </ArticleContainer>
        )
      }}
    </Query>
  )
}

export default withDashboard(Article)
