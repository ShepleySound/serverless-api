const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler =  async function(event, context) {
  let body;
  let statusCode = 200;
  let headers = {
    "Content-Type": "application/json"
  }
  try {
    await dynamo.delete({
      TableName: 'customers',
      Key: {
        id: event.pathParameters.id,
      }
    }).promise();
    body = `Updated customer ${request.id}`
  } catch(error) {
    console.log(error);
    statusCode = 400;
    body = error.message;
  } finally {
    body = JSON.stringify(body);
  }
  return { statusCode, body, headers }
}
