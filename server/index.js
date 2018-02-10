const { send } = require('micro')
const { get, post, options, router } = require('microrouter')
const { microGraphql, microGraphiql } = require('apollo-server-micro')
const schema = require('./src/schema')

const preflighHandler = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
  res.setHeader('Access-Control-Allow-Headers', 'content-type')

  send(res, 200, 'success')
}

const graphqlHandler = microGraphql({ schema })
const graphiqlHandler = microGraphiql({ endpointURL: '/graphql' })

module.exports = router(
  options('/graphql', preflighHandler),

  get(`/graphql`, (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    return graphqlHandler(req, res)
  }),

  post(`/graphql`, (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    return graphqlHandler(req, res)
  }),

  get(`/graphiql`, graphiqlHandler),
  (request, response) => send(response, 404, 'not found')
)
