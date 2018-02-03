const typeDefs = `
  type Name {
    id: ID!,
    name: String!
  }

  type Query {
    names: [Name]
  }
`

module.exports = typeDefs
