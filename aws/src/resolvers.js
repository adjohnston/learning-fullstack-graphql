const { DynamoDB } = require('aws-sdk')

const dynamoDB = new DynamoDB.DocumentClient()
const namesTable = process.env.NAMES_TABLE

const resolvers = {
  Query: {
    getNames: () => {
      return dynamoDB
        .scan({ TableName: namesTable })
        .promise()
        .then(data => data.Items)
    },

    getName: (root, { name }) => {
      return dynamoDB
        .get({ TableName: namesTable, Key: { name } })
        .promise()
        .then(data => data.Item)
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
