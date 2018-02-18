const typeDefs = `
  type Name {
    id: ID!,
    name: String!
  }

  type Query {
    names: [Name]
  }

  type Mutation {
    createName(name: String!): Name
  }
`

module.exports = typeDefs
