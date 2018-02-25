const { DynamoDB } = require('aws-sdk')

const dynamoDB = new DynamoDB.DocumentClient({
  region: 'localhost',
  endpoint: 'http://localhost:8000',
})

const namesTable = process.env.NAMES_TABLE

const resolvers = {
  Query: {
    names: (root, { name }) => {
      return dynamoDB
        .scan({
          TableName: namesTable,
          Item: {
            name,
          },
        })
        .promise()
    },
  },

  Mutation: {
    createName: (root, { name }) => {
      return dynamoDB
        .put({
          TableName: namesTable,
          Item: {
            name,
          },
        })
        .promise()
    },
  },
}

module.exports = resolvers
