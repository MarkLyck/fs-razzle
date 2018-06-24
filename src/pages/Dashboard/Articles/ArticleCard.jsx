import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { HeaderImage } from './styles'

const ArticleCard = ({ article }) => {
  const articleURLName = article.title.split(' ').join('-')
  return (
    <Link to={`/dashboard/articles/${articleURLName}`}>
      <HeaderImage data-headerimageurl={article.headerImageUrl} />
      <h4>{article.title}</h4>
    </Link>
  )
}

ArticleCard.propTypes = {
  article: PropTypes.object,
}

export default ArticleCard
