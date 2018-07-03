import React from 'react'
import Button from 'components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BackButton = ({ history }) => (
  <Button color="primary" variant="raised" type="light" onClick={() => history.push('/dashboard/articles')}>
    <FontAwesomeIcon icon="angle-left" style={{ marginRight: '8px' }} />Articles
  </Button>
)

export default BackButton
