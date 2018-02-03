const { send } = require('micro')
const { get, post, router } = require('microrouter')
const { microGraphql, microGraphiql } = require('apollo-server-micro')
const schema = require('./src/schema')

const graphqlHandler = microGraphql({ schema })
const graphiqlHandler = microGraphiql({ endpointURL: '/graphql' })

module.exports = router(
  get(`/graphql`, graphqlHandler),
  post(`/graphql`, graphqlHandler),
  get(`/graphiql`, graphiqlHandler),
  (request, response) => send(response, 404, 'not found')
)
