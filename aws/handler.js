'use strict'

const { graphqlLambda, graphiqlLambda } = require('apollo-server-lambda')
const schema = require('./src/schema')

module.exports = {
  graphqlHandler: graphqlLambda({ schema }),
  graphiqlHandler: graphiqlLambda({ endpointURL: '/dev/graphql' }),
}
