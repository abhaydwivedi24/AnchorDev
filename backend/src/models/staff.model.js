/**
 * @summary - Staff Model
 */
//referencing sdk in js file
const AWS = require("aws-sdk");
//specifying aws region where dynamodb table will be created
AWS.config.update({ region: "us-east-1" });
//instantiate dynamodb class
const dynamodb = new AWS.DynamoDB();
dynamodb.createTable(
  {
    TableName: "demo_sdk",
    AttributeDefinitions: [
      {
        AttributeName: "firstName",
        AttributeType: "S", //string,
      },
      {
        AttributeName: "lastName",
        AttributeType: "S", //string
      },
      {
        AttributeName: "email",
        AttributeType: "S", //string
      },
      {
        AttributeName: "emergPhone",
        AttributeType: "S", //string
      },
      {
        AttributeName: "addressLine1",
        AttributeType: "S", //string
      },
      {
        AttributeName: "addressLine2",
        AttributeType: "S", //string
      },
      {
        AttributeName: "city",
        AttributeType: "S", //string
      },
      {
        AttributeName: "state",
        AttributeType: "S", //string
      },
      {
        AttributeName: "postalCode",
        AttributeType: "N", //number
      },
      {
        AttributeName: "payRateType",
        AttributeType: "S", //string
      },

      // {
      //     AttributeName: "timestamp",
      //     AttributeType: "N" //number
      // }
    ],
    KeySchema: [
      {
        AttributeName: "id",
        KeyType: "HASH",
      },
      {
        AttributeName: "timestamp",
        KeyType: "RANGE",
      },
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    },
  },
  (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(JSON.stringify(data, null, 2));
    }
  }
);
