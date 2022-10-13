const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler =  async function(event, context) {
  let body;
  let statusCode = 200;
  await dynamo.delete({
    TableName: 'customers',
    Key: {
      id: event.pathParameters.id,
    }
  }).promise();
  body = `Updated customer ${request.id}`
  return { statusCode, body }
}
