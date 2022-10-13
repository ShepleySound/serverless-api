const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler =  async function(event, context) {
    let statusCode = 200;
    let body;
    let headers = {
      "Content-Type": "application/json"
    }
  try {
    if (event.pathParameters) {
      body = await dynamo
      .get({
        TableName: 'customers',
        Key: {
          customerid: event.pathParameters.id
        }
      })
      .promise();
    } else {
      body = await dynamo.scan({ TableName: 'customers' }).promise();
    }
  } catch(error) {
    console.log(error);
    statusCode = 400;
    body = error.message;
  } finally {
    body = JSON.stringify(body);
  }
  return { statusCode, body, headers }
}
