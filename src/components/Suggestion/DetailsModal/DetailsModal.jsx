import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import List from 'components/List'
import Button from 'components/Button'
import { Modal, ListContainer, ListItem, ItemValue } from './styles'

const unitValues = {
  percent: '%',
}

const DetailsModal = ({ suggestion, onRequestClose, isOpen }) => (
  <Modal className="stock-details" overlayClassName="modal-overlay" onRequestClose={onRequestClose} isOpen={isOpen}>
    <h2>{suggestion.name}</h2>
    <ListContainer>
      <List>
        {suggestion.advanced_data &&
          suggestion.advanced_data.map((item, i) => (
            <ListItem key={item.name} className={i % 2 === 0 ? 'gray-item' : 'white-item'}>
              <h3>{item.display_name}:</h3>
              <ItemValue>
                {item.value}
                {unitValues[item.unit]}
              </ItemValue>
            </ListItem>
          ))}
      </List>
    </ListContainer>
    <Button variant="raised" type="light" color="black" hoverColor="error" onClick={onRequestClose}>
      <FontAwesomeIcon icon={['far', 'times']} />Close
    </Button>
  </Modal>
)

DetailsModal.propTypes = {
  suggestion: PropTypes.object,
}

export default DetailsModal
