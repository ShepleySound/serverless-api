const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler =  async function(event, context) {
  let body;
  let statusCode = 200;
  if (event.pathParameters !== null) {
    body = await dynamo.get({
      TableName: 'customers',
      Key: {
        id: event.pathParameters.id
      }
    }).promise();
  } else {
    body = await dynamo.scan({ TableName: 'customers' }).promise();
  }
  return { statusCode, body }
}
