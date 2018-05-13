import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

//Apollo
// eslint-disable-next-line
import fetch from 'isomorphic-fetch'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import { graphCoolEndpoint } from 'common/constants'

// emotion
import { ThemeProvider } from 'emotion-theming'
import theme from 'common/utils/theme'
import 'common/utils/globalStyles'

//init
import 'common/utils/fontAwesomeLibrary'

// Pages
import Retail from 'pages/Retail'
import Pro from 'pages/Pro'
import Dashboard from 'pages/Dashboard'
import Suggestions from 'pages/Dashboard/Suggestions'
import Portfolio from 'pages/Dashboard/Portfolio'
import Trades from 'pages/Dashboard/Trades'
import AdminOverview from 'pages/Dashboard/Admin/Overview'

// Setup
const client = new ApolloClient({
    link: new HttpLink({ uri: graphCoolEndpoint }),
    cache: new InMemoryCache(),
  })

const App = () => (
    <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
            <Switch>
                <Route exact path="/" component={Retail} />
                <Route exact path="/pro" component={Pro} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/dashboard/suggestions" component={Suggestions} />
                <Route exact path="/portfolio/*" component={Portfolio} />
                <Route exact path="/trades/" component={Trades} />

                <Route exact path="/admin" component={AdminOverview} />
            </Switch>
        </ApolloProvider>
    </ThemeProvider>
)

export default App
