const AWS = require('aws-sdk')
const dynamoDB = new AWS.DynamoDB.DocumentClient()

const resolvers = {
  Query: {
    names: (root, { name }) => {
      return dynamoDB
        .scan({
          TableName: 'names',
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
          TableName: 'names',
          Item: {
            name,
          },
        })
        .promise()
    },
  },
}

module.exports = resolvers
