import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const QUERY = gql`
  {
    names {
      id
      name
    }
  }
`

const App = () => <div>I live</div>

export default graphql(QUERY)(App)
