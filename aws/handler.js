'use strict'

const { graphqlLambda, graphiqlLambda } = require('apollo-server-lambda')
const schema = require('./src/schema')

module.exports = {
  graphqlHandler(event, context, callback) {
    const callbackFilter = (error, output) => {
      output.headers['Access-Control-Allow-Origin'] = '*'
      callback(error, output)
    }

    return graphqlLambda({ schema })(event, context, callbackFilter)
  },
  graphiqlHandler: graphiqlLambda({ endpointURL: '/dev/graphql' }),
}
