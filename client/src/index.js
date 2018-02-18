import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import App from './App'

const client = new ApolloClient({
  uri: 'https://rlqzqsex11.execute-api.us-east-1.amazonaws.com/dev/graphql',
})

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
