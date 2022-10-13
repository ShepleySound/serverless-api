const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler =  async function(event, context) {
  let body;
  let statusCode = 200;
  let headers = {
    "Content-Type": "application/json"
  }
  try {
    let request = JSON.parse(event.body);
    await dynamo
    .post({
      TableName: 'customers',
      Item: {
        id: request.id,
        name: request.name,
        purchaseCount: request.purchaseCount,
      }
    })
    .promise();
  } catch(error) {
    console.log(error);
    statusCode = 400;
    body = error.message;
  } finally {
    body = JSON.stringify(body)
  }
  body = `Updated customer ${request.id}`
  return { statusCode, body, headers }
}
