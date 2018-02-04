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

const App = props => <div>{JSON.stringify(props)}</div>

export default graphql(QUERY)(App)
