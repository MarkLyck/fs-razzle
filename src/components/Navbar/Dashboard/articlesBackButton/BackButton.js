import React from 'react'
import Button from 'material-ui/Button'

const BackButton = ({ history }) => (
    <Button color="primary" onClick={() => history.push('/dashboard/articles')}>
        <i className="fa fa-angle-left fa-2x" style={{ marginRight: '8px' }} />Articles
    </Button>
)

export default BackButton
