const { send } = require('micro')
const { get, post, options, router } = require('microrouter')
const { microGraphql, microGraphiql } = require('apollo-server-micro')
const schema = require('./src/schema')
const db = require('./db')

const withCors = handler => (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  return handler(req, res)
}

const preflighHandler = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  res.setHeader('Access-Control-Allow-Headers', 'content-type')

  send(res, 200, 'success')
}

const graphqlHandler = withCors(microGraphql({ schema }))
const graphiqlHandler = microGraphiql({ endpointURL: '/graphql' })

module.exports = router(
  options('/graphql', preflighHandler),
  get(`/graphql`, graphqlHandler),
  post(`/graphql`, graphqlHandler),
  get(`/graphiql`, graphiqlHandler),
  (request, response) => send(response, 404, 'not found')
)
