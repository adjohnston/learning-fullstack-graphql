const { send } = require('micro')
const { get, post, router } = require('microrouter')
const { microGraphql, microGraphiql } = require('apollo-server-micro')
const schema = require('./src/schema')

const graphqlHandler = microGraphql({ schema })
const graphiqlHandler = microGraphiql({ endpointURL: '/graphql' })

module.exports = router(
  get(`/graphql`, (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    return graphqlHandler(req, res)
  }),

  post(`/graphql`, (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Request-Method', 'POST')
    return graphqlHandler(req, res)
  }),

  get(`/graphiql`, graphiqlHandler),
  (request, response) => send(response, 404, 'not found')
)
