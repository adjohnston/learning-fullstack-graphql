const nameModel = require('../db/models/name')

const resolvers = {
  Query: {
    names: () => {
      return nameModel.find()
    },
  },
}

module.exports = resolvers
