import React from 'react'
import { Query } from "react-apollo"
import gql from "graphql-tag"
import styled from 'react-emotion'
import { Link } from 'react-router-dom'
import { planIds, marketIds } from 'common/constants'
import RetailData from 'common/mocks/RetailData.json'

const Test = styled.div`
    background: blue;
    height: 40px;
    width: 40px;
`

const GET_ENTRY_AND_MARKET_DATA = gql`
  query {
    Plan(id: "${planIds.ENTRY}") {
      name
      backtestedData
      info
      price
      portfolioYields
      launchStatistics
      latestSells
      statistics
    },
    SP500: Market(id: "${marketIds.SP500}") {
        name
        pricesSince2009
        longtermPrices
    }
    DJIA: Market(id: "${marketIds.DJIA}") {
        name
        pricesSince2009
    }
  }
`

const Retail = () => (
    <Query query={GET_ENTRY_AND_MARKET_DATA}>
    {({ loading, error, data }) => {
        console.log('MOCK', RetailData)
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error :(</p>
        
        console.log(data)

        return (
            <div className="retail-page">
                Retail
                <Link to="/pro">/pro</Link>
                <Test />
            </div>
        )
    }}
    </Query>
)

export default Retail
