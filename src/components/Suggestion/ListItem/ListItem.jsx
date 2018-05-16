import React from 'react'
import PropTypes from 'prop-types'
import { SuggItem } from './styles'

const ListItem = ({ name, value }) => (
    <SuggItem>
        <p>{name}:</p>
        <h4>{value}</h4>
    </SuggItem>
)

ListItem.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
}

export default ListItem
