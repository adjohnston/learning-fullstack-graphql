const typeDefs = require('./type-defs')
const resolvers = require('./resolvers')
const { makeExecutableSchema } = require('graphql-tools')

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

module.exports = schema
