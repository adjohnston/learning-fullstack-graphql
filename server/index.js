const { send } = require('micro')
const { get, post, router } = require('microrouter')
const { microGraphql, microGraphiql } = require('apollo-server-micro')
const { makeExecutableSchema } = require('graphql-tools')

// seed data
const names = [
  {
    id: 0,
    name: 'Adam',
  },
  {
    id: 1,
    name: 'Tom',
  },
]

const typeDefs = `
  type Name {
    id: ID!,
    name: String!
  }

  type Query {
    names: [Name]
  }
`

const resolvers = {
  Query: {
    names: () => names,
  },
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

const graphqlHandler = microGraphql({ schema })
const graphiqlHandler = microGraphiql({ endpointURL: '/graphql' })

module.exports = router(
  get(`/graphql`, graphqlHandler),
  post(`/graphql`, graphqlHandler),
  get(`/graphiql`, graphiqlHandler),
  (request, response) => send(response, 404, 'not found')
)
