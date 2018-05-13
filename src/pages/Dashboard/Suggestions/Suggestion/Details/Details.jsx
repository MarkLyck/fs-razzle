import React from 'react'
import PropTypes from 'prop-types'
import Dialog, { DialogTitle } from 'material-ui/Dialog'
import List, { ListItem } from 'material-ui/List'
import { ListContainer, ListItemStyles, ItemValue } from './styles'

const unitValues = {
    percent: '%',
}

const Details = ({ suggestion, ...otherProps }) => (
    <Dialog {...otherProps} className="stock-details">
        <DialogTitle>{suggestion.name}</DialogTitle>
        <ListContainer>
            <List>
                {suggestion.advanced_data && suggestion.advanced_data.map((item, i) => (
                    <ListItem style={ListItemStyles} key={item.name} className={(i % 2 === 0) ? 'gray-item' : 'white-item'}>
                        <h3>{item.display_name}:</h3>
                        <ItemValue>{item.value}{unitValues[item.unit]}</ItemValue>
                    </ListItem>
                ))}
            </List>
        </ListContainer>
    </Dialog>
)

Details.propTypes = {
    suggestion: PropTypes.object,
}

export default Details
