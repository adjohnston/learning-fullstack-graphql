import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const QUERY = gql`
  {
    names {
      id
      name
    }
  }
`

const App = () => (
  <Query query={QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading…</div>

      if (error) return null

      if (data.names === 0)
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

      return data.names.map(({ name, id }) => <div key={id}>{name}</div>)
    }}
  </Query>
)

export default App
