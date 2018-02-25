import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const QUERY = gql`
  {
    getNames {
      name
    }
  }
`

const App = () => (
  <Query query={QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading…</div>

      if (error) return null

      if (data.getNames.length === 0)
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

      return data.getNames.map(({ name }, index) => (
        <div key={index}>{name}</div>
      ))
    }}
  </Query>
)

export default App
