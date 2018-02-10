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

const App = ({ data: { loading, names } }) => {
  if (loading) return <div>Loading…</div>

  return names.map(({ name, id }) => <div key={id}>{name}</div>)
}

export default graphql(QUERY)(App)
