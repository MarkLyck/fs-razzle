import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

//Apollo
// eslint-disable-next-line
import fetch from 'isomorphic-fetch'
import { ApolloClient } from 'apollo-client'
import { setContext } from 'apollo-link-context'
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
import Articles from 'pages/Articles'
import Article from 'pages/Articles/Article'
import Suggestions from 'pages/Dashboard/Suggestions'
import Portfolio from 'pages/Dashboard/Portfolio'
import DashboardArticles from 'pages/Dashboard/Articles'
import DashboardArticle from 'pages/Dashboard/Articles/Article'
import MyAccount from 'pages/Dashboard/MyAccount'
import AdminPanel from 'pages/Dashboard/Admin/Panel'
import AdminUsers from 'pages/Dashboard/Admin/Users'
import AdminAPI from 'pages/Dashboard/Admin/API'
import AdminNewArticle from 'pages/Dashboard/Admin/NewArticle'

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('graphcoolToken')
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const httpLink = new HttpLink({ uri: graphCoolEndpoint })

// Setup
export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

const App = () => (
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <Switch>
        <Route exact path="/" component={Retail} />
        <Route exact path="/pro" component={Pro} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/articles/:article" component={Article} />
        <Route exact path="/dashboard" component={Portfolio} />
        <Route exact path="/dashboard/suggestions" component={Suggestions} />
        <Route exact path="/dashboard/portfolio" component={Portfolio} />
        <Route exact path="/dashboard/trades/" component={Suggestions} />
        <Route exact path="/dashboard/articles" component={DashboardArticles} />
        <Route exact path="/dashboard/articles/:article" component={DashboardArticle} />
        <Route exact path="/dashboard/account/" component={MyAccount} />
        <Route exact path="/dashboard/admin" component={AdminPanel} />
        <Route exact path="/dashboard/admin/panel" component={AdminPanel} />
        <Route exact path="/dashboard/admin/users" component={AdminUsers} />
        <Route exact path="/dashboard/admin/API" component={AdminAPI} />
        <Route exact path="/dashboard/admin/newArticle" component={AdminNewArticle} />
      </Switch>
    </ApolloProvider>
  </ThemeProvider>
)

export default App
