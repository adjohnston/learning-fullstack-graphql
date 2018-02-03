const data = require('../seed-data')

const resolvers = {
  Query: {
    names: () => data.names,
  },
}

module.exports = resolvers
