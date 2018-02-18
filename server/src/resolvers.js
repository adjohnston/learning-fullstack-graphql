const nameModel = require('../db/models/name')

const resolvers = {
  Query: {
    names: () => {
      return nameModel.find()
    },
  },

  Mutation: {
    createName: (root, { name }) => {
      return nameModel.create({ name })
    },
  },
}

module.exports = resolvers
