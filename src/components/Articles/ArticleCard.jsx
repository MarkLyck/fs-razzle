import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Card, Title, HeaderImage } from './styles'

const ArticleCard = ({ article, location }) => {
  const articleURLName = article.title.split(' ').join('-')
  const articleLink = location.pathname.includes('dashboard')
    ? `/dashboard/articles/${articleURLName}`
    : `/articles/${articleURLName}`

  return (
    <Link to={articleLink}>
      <Card>
        <HeaderImage data-headerimageurl={article.headerImageUrl} />
        <Title>{article.title}</Title>
      </Card>
    </Link>
  )
}

ArticleCard.propTypes = {
  article: PropTypes.object,
}

export default ArticleCard
