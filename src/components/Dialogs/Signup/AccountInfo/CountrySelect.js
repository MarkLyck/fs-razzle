/* eslint-disable react/no-array-index-key */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Autosuggest from 'react-autosuggest'
import Paper from 'material-ui/Paper'
import { MenuItem } from 'material-ui/Menu'
import match from 'autosuggest-highlight/match'
import parse from 'autosuggest-highlight/parse'
import countries from 'common/data/countries'
import { Field } from 'components/Form'
import { AutoCompleteContainer } from '../styles'

function renderInput(inputProps) {
    const { classes, home, value, ref, inputState, onBlur, onFocus, ...other } = inputProps

    return (
        <Field
            autoFocus={home}
            label="Country"
            className={`${classes.textField} ${classes.input} ${inputState}`}
            inputState={inputState}
            value={value}
            onBlur={onBlur}
            onFocus={onFocus}
            style={{ width: '100%' }}
            {...other}
        />
    )
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
    const matches = match(suggestion.label, query)
    const parts = parse(suggestion.label, matches)

    return (
        <MenuItem selected={isHighlighted} component="div">
            <div>
                {parts.map((part, index) => (
                    part.highlight
                        ? <span key={index} style={{ fontWeight: 300 }}>{part.text}</span>
                        : <strong key={index} style={{ fontWeight: 500 }}>{part.text}</strong>
                ))}
            </div>
        </MenuItem>
    )
}

function renderSuggestionsContainer(options) {
    const { containerProps, children } = options
    return (<Paper {...containerProps} square>{children}</Paper>)
}

function getSuggestionValue(suggestion) {
    return suggestion.label
}

function getSuggestions(value) {
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length
    let count = 0

    return inputLength === 0
        ? []
        : countries.filter((suggestion) => {
            const keep = count < 5 && suggestion.label.toLowerCase().slice(0, inputLength) === inputValue
            if (keep) { count += 1 }
            return keep
        })
}

class IntegrationAutosuggest extends Component {
    state = {
        value: '',
        suggestions: [],
    };

    handleSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value),
        })
    }

    handleSuggestionsClearRequested = () => {
        this.setState({
            suggestions: [],
        })
    }

    handleChange = (event, { newValue }) => {
        this.setState({ value: newValue })
        this.props.handleCountrySelect(newValue)
    }

    render() {
        const { classes, inputState, onBlur, onFocus } = this.props

        return (
            <AutoCompleteContainer>
                <Autosuggest
                    theme={{
                        container: classes.container,
                        suggestionsContainerOpen: classes.suggestionsContainerOpen,
                        suggestionsList: classes.suggestionsList,
                        suggestion: classes.suggestion,
                    }}
                    renderInputComponent={renderInput}
                    suggestions={this.state.suggestions}
                    onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
                    renderSuggestionsContainer={renderSuggestionsContainer}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={{
                        autoFocus: false,
                        classes,
                        inputState,
                        onBlur,
                        onFocus,
                        placeholder: 'Country',
                        value: this.state.value,
                        onChange: this.handleChange,
                    }}
                />
            </AutoCompleteContainer>
        )
    }
}

IntegrationAutosuggest.defaultProps = {
    classes: {
        suggestionsContainerOpen: 'suggestionsContainerOpen',
        suggestionsList: 'suggestionsList',
        suggestion: 'suggestion',
        input: 'input',
    },
}

IntegrationAutosuggest.propTypes = {
    classes: PropTypes.object.isRequired,
    handleCountrySelect: PropTypes.func.isRequired,
    inputState: PropTypes.string,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
}

export default IntegrationAutosuggest
