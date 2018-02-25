const typeDefs = `
  type Name {
    name: String!
  }

  type Query {
    getNames: [Name]
    getName(name: String!): Name
  }

  type Mutation {
    createName(name: String!): Name
  }
`

module.exports = typeDefs
