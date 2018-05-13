import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Suggestion extends Component {
    render() {
        return (<div>test</div>)
    }
}

Suggestion.propTypes = {
    suggestion: PropTypes.object,
    allStocks: PropTypes.array,
    refetch: PropTypes.func,
}

export default Suggestion