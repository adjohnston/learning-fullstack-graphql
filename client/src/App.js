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

  if (names.length === 0)
    return (
      <div>
        There are no names yet{' '}
        <span role="img" aria-label="sobbing">
          😭
        </span>{' '}
        Why not add one?{' '}
        <span role="img" aria-label="thumbs up">
          👍
        </span>
      </div>
    )

  return names.map(({ name, id }) => <div key={id}>{name}</div>)
}

export default graphql(QUERY)(App)
