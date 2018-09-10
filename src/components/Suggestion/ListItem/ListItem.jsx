import React from 'react'
import PropTypes from 'prop-types'
import Tooltip from 'components/Tooltip'

import { SuggItem } from './styles'

const ListItem = ({ name, value, tip }) => (
  <SuggItem>
    <p>{name}:</p>
    <div style={{ display: 'flex' }}>
      <h4 style={{ marginRight: '8px' }}>{value}</h4>
      {tip && <Tooltip tip={tip} />}
    </div>
  </SuggItem>
)

ListItem.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
}

export default ListItem
