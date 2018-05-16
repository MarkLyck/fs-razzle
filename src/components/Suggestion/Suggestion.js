import React, { Component } from 'react'
import { Query } from "react-apollo"
import gql from "graphql-tag"
import PropTypes from 'prop-types'
import Button from 'components/Button'
import Slide from 'material-ui/transitions/Slide'

import { usingMocks } from 'common/utils/featureTests'
import mockData from 'common/mocks/suggestionData.json'
import ListItem from './ListItem'
import DetailsModal from './DetailsModal'
import StockChart from './StockChart'
import { Card, SuggContainer, SuggHeader, ContentContainer, StockInfoList, Placeholder } from './styles'

const SUGGESTION_QUERY = gql`
  query SuggestionQuery($ticker: String) {
    allStocks(filter: {
        ticker: $ticker
    }) {
        ticker
        latestPrice
        sixMonthsPrices
    }
  }
`

class Suggestion extends Component {
    state = { detailsIsVisible: false, stockFetchFailed: false }

    componentDidMount() {
        // this.props.refetch({ ticker: this.props.suggestion.ticker })
        // window.setTimeout(() => this.checkFetchStatus(), 10000)
    }

    checkFetchStatus() {
        // if (!this.props.allStocks.length) {
        //     this.setState({ stockFetchFailed: true })
        // }
    }

    toggleDetails = () => this.setState({ detailsIsVisible: !this.state.detailsIsVisible })

    render() {
        const { suggestion, serialChartsReady } = this.props
        const { detailsIsVisible, stockFetchFailed } = this.state

        const suggestedPriceText = suggestion.action === 'BUY' ? 'Buy at' : 'Sell at'
        const allocationText = suggestion.percentage_weight ? 'Cash allocation' : 'Portfolio allocation'
        const allocation = suggestion.percentage_weight ? suggestion.percentage_weight : suggestion.portfolio_weight
        
        return <Query query={SUGGESTION_QUERY}>
            {({ loading, error, data }) => {

            if (error && !usingMocks) return <p>Error loading</p>

            const stock = data && data.allStocks ? data.allStocks[0] : mockData.allStocks[0]
            const latestPrice = stock ? stock.latestPrice : suggestion.suggested_price.toFixed(2)

            return (
                <SuggContainer>
                    <SuggHeader>
                        <h3 className="suggestion-name">{suggestion.name}</h3>
                        <h3 className={`${suggestion.action}-action action`}>{suggestion.action}</h3>
                    </SuggHeader>
                    <Card>
                        <ContentContainer type={suggestion.action}>
                            <StockInfoList>
                                <ListItem name="Ticker" value={suggestion.ticker} />
                                <ListItem name={suggestedPriceText} value={`$${suggestion.suggested_price.toFixed(2)}`} />
                                <ListItem name="Last price" value={`$${latestPrice}`} />
                                { suggestion.action === 'BUY'
                                    && <ListItem name={allocationText} value={`${allocation.toFixed(2)}%`} />}
                                { suggestion.action === 'SELL'
                                    && <ListItem name="Purchase price" value={`$${suggestion.original_purchase.toFixed(2)}`} />}
                                {suggestion.advanced_data
                                    ? <Button color="white" variant="raised" onClick={this.toggleDetails}>Details</Button>
                                    : <Placeholder />
                                }
                            </StockInfoList>
                            <StockChart
                                sixMonthsPrices={stock ? stock.sixMonthsPrices : []}
                                ticker={suggestion.ticker}
                                suggestedPrice={suggestion.suggested_price}
                                action={suggestion.action}
                                stockFetchFailed={stockFetchFailed}
                                serialChartsReady={serialChartsReady}
                            />
                        </ContentContainer>
                        <DetailsModal
                            suggestion={suggestion}
                            open={detailsIsVisible}
                            transition={Slide}
                            onRequestClose={this.toggleDetails}
                        />
                    </Card>
                </SuggContainer>
            )
        }}
        </Query>
    }
}

Suggestion.propTypes = {
    suggestion: PropTypes.object,
    allStocks: PropTypes.array,
    refetch: PropTypes.func,
}

export default Suggestion
