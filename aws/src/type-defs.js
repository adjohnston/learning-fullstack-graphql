const typeDefs = `
  type Name {
    name: String!
  }

  type Query {
    names(name: String): [Name]
  }

  type Mutation {
    createName(name: String!): Name
  }
`

module.exports = typeDefs
