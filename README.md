# Serverless API

This repository holds code for a serverless API. Each `lambda*` directory holds code for an AWS Lambda function for automatic deployment from GitHub.

## Documentation

The lambda functions are written in a microservice format, each handling a single CRUD function for a DynamoDB table. They use [AWS DynamoDB DocumentClient](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html) to work with table items in an abstracted manner.

### Root URL

```text
https://vo26vdx2l7.execute-api.us-west-2.amazonaws.com/
```

### Routes

- /customers
  - GET
  - POST
    - Supply a body to the HTTP request in this format -
    ```JSON
      {
        "customerid": "12345abc" [REQUIRED],
        "name": "yournamehere",
        "purchaseCount": 100
      }
    ```

- /customers/{id}
  - GET
  - PUT (Supply a body without the "customerid" attribute)
  - DELETE