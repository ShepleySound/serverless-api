const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler =  async function(event, context) {
  let body;
  let statusCode = 200;
  let request = JSON.parse(event.body);
  await dynamo.post({
    TableName: 'customers',
    Item: {
      id: request.id,
      name: request.name,
      purchaseCount: request.purchaseCount,
    }
  }).promise();
  body = `Created customer ${request.id}`
  return { statusCode, body }
}
