import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { format } from 'date-fns'
import Button from 'components/Button'
import ListItem from './ListItem'
import DetailsModal from './DetailsModal'
import StockChart from './StockChart'
import {
  SuggContainer,
  SuggHeader,
  SuggestionName,
  ContentContainer,
  StockInfoList,
  Placeholder,
  ButtonPlaceholder,
  LastPrice,
} from './styles'

class Suggestion extends Component {
  state = { detailsIsVisible: false }

  toggleDetails = () => this.setState({ detailsIsVisible: !this.state.detailsIsVisible })

  renderAllocationTip = () => {
    const { suggestionsType } = this.props

    if (suggestionsType === 'Trades') {
      return `
Percentage of total portfolio value to add\\A\\A 

E.g. if it\\'s 5.00% and your portfolio consists of $40,000 in stocks and 
cash,\00a0 you would purchase for $2,000 of this stock.\\A\\A 

It makes no difference if you already have this stock in your portfolio. Trades are in addition to existing positions.
`
    }
    return `
The percentage indicated relates to a percentage of cash available 
for investment this month.\\A\\A 

E.g. if 10,000 USD is available for investment this month, and 
Cash allocation is 25%, it suggests adding $2,500  
of this stock to your portfolio.\\A\\A 

Or, if you prefer to use a percentage of total portfolio value 
instead, visit the Trades section.`
  }

  renderTotalAllocationTip = () => `
The total allocation in % of this stock in the portfolio, after this and all previous transactions have taken place
`

  render() {
    const { suggestion, stock, serialChartsReady, suggestionsType, loading, error } = this.props
    const { detailsIsVisible } = this.state

    const suggestedPriceName = suggestionsType === 'Trades' ? 'Traded at' : 'Buy below'
    // when it's a suggestion and says "Buy at or below below" add 1 cent.
    const suggestedPrice = (suggestion.suggested_price + (suggestionsType === 'Trades' ? 0 : 0.01)).toFixed(2)
    const allocationText = suggestion.percentage_weight ? 'Cash allocation' : `Add in ${format(new Date(), 'MMMM')}`
    const allocation = suggestion.percentage_weight ? suggestion.percentage_weight : suggestion.portfolio_weight

    const latestPrice = stock ? stock.latestPrice : suggestion.suggested_price

    return (
      <SuggContainer>
        <SuggHeader>
          <SuggestionName>
            <span className={`${suggestion.action}-action action`}>{suggestion.action}</span>
            {suggestion.name}
          </SuggestionName>
          {stock && stock.sixMonthsPrices && <LastPrice>${latestPrice.toFixed(2)}</LastPrice>}
        </SuggHeader>
        <ContentContainer type={suggestion.action}>
          <StockInfoList className="info-list">
            <ListItem name="Ticker" value={suggestion.ticker} />
            {suggestion.action === 'BUY' && <ListItem name={suggestedPriceName} value={`$${suggestedPrice}`} />}
            {suggestionsType === 'Suggestions' && <ListItem name="Last price" value={`$${latestPrice.toFixed(2)}`} />}
            {suggestion.action === 'BUY' && (
              <ListItem
                name={allocationText}
                value={`${allocation.toFixed(2)}%`}
                tip={this.renderAllocationTip()}
                tipWidth="345"
              />
            )}
            {suggestion.action === 'BUY' &&
              suggestion.total_portfolio_weight && (
                <ListItem
                  name="Total position"
                  value={`${suggestion.total_portfolio_weight.toFixed(2)}%`}
                  tip={this.renderTotalAllocationTip()}
                  tipWidth="345"
                />
              )}
            {suggestion.action === 'SELL' && (
              <ListItem name="Purchase price" value={`$${suggestion.original_purchase.toFixed(2)}`} />
            )}
            {suggestion.advanced_data ? (
              <Button type="light" variant="raised" onClick={this.toggleDetails}>
                Details
              </Button>
            ) : (
              <React.Fragment>
                <Placeholder className="placeholder" />
                {suggestionsType === 'Trades' && <Placeholder className="placeholder" />}
                <ButtonPlaceholder className="placeholder" />
              </React.Fragment>
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
