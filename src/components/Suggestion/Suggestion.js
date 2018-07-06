import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from 'components/Button'

import ListItem from './ListItem'
import DetailsModal from './DetailsModal'
import StockChart from './StockChart'
import { Card, SuggContainer, SuggHeader, ContentContainer, StockInfoList, Placeholder } from './styles'

class Suggestion extends Component {
  state = { detailsIsVisible: false }

  toggleDetails = () => this.setState({ detailsIsVisible: !this.state.detailsIsVisible })

  render() {
    const { suggestion, stock, serialChartsReady, suggestionsType, loading, error } = this.props
    const { detailsIsVisible } = this.state

    const suggestedPriceName = suggestionsType === 'Trades' ? 'Bought at' : 'Buy below'
    // when it's a suggestion and says "Buy below" add 1 cent.
    const suggestedPrice = suggestion.suggested_price.toFixed(2) + (suggestionsType === 'Trades' ? 0 : 0.01)
    const allocationText = suggestion.percentage_weight ? 'Cash allocation' : 'Portfolio allocation'
    const allocation = suggestion.percentage_weight ? suggestion.percentage_weight : suggestion.portfolio_weight

    const latestPrice = stock ? stock.latestPrice : suggestion.suggested_price.toFixed(2)

    return (
      <SuggContainer>
        <SuggHeader>
          <h3 className={`${suggestion.action}-action action`}>{suggestion.action}</h3>
          <h3 className="suggestion-name">{suggestion.name}</h3>
        </SuggHeader>
        <Card>
          <ContentContainer type={suggestion.action}>
            <StockInfoList>
              <ListItem name="Ticker" value={suggestion.ticker} />
              {suggestion.action === 'BUY' && <ListItem name={suggestedPriceName} value={`$${suggestedPrice}`} />}
              <ListItem name="Last price" value={`$${latestPrice}`} />
              {suggestion.action === 'BUY' && <ListItem name={allocationText} value={`${allocation.toFixed(2)}%`} />}
              {suggestion.action === 'SELL' && (
                <ListItem name="Purchase price" value={`$${suggestion.original_purchase.toFixed(2)}`} />
              )}
              {suggestion.advanced_data ? (
                <Button color="white" variant="raised" onClick={this.toggleDetails}>
                  Details
                </Button>
              ) : (
                <Placeholder />
              )}
            </StockInfoList>
            <StockChart
              sixMonthsPrices={stock ? stock.sixMonthsPrices : []}
              ticker={suggestion.ticker}
              suggestedPrice={suggestion.suggested_price}
              action={suggestion.action}
              loading={loading}
              error={error}
              serialChartsReady={serialChartsReady}
            />
          </ContentContainer>
          <DetailsModal suggestion={suggestion} isOpen={detailsIsVisible} onRequestClose={this.toggleDetails} />
        </Card>
      </SuggContainer>
    )
  }
}

Suggestion.propTypes = {
  suggestion: PropTypes.object,
  allStocks: PropTypes.array,
  refetch: PropTypes.func,
}

export default Suggestion
