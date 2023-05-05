const express = require("express");
const routes = require("./src/routes");
const cors = require("cors");
const bodyParser = require("body-parser");
const dynamoose = require("dynamoose");
require("dotenv").config();

require("aws-sdk/lib/maintenance_mode_message").suppress = true;
const { DynamoDB } = require("aws-sdk");
// const AWS = require("aws-sdk");

//referencing sdk in js file
const AWS = require("aws-sdk");
//specifying aws region where dynamodb table will be created
AWS.config.update({ region: "us-east-1" });
//instantiate dynamodb class
const dynamodb = new AWS.DynamoDB();

// AWS.config.update({ region: process.env.AWS_REGION });

// dynamoose.aws.ddb.local("http://localhost:8000");

const app = express();

const whitelist = ["*"];

var corsOptionsDelegate = (req, callback) => {
  let corsOptions = {
    origin: true,
  };
  callback(null, corsOptions); // callback expects two parameters: error and options
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors(corsOptionsDelegate));

app.use(express.json({ limit: "50mb", extended: true }));
app.use(
  express.urlencoded({
    limit: "10mb",
    parameterLimit: 100000,
    extended: true,
  })
);

app.use("/api", routes);

const PORT = 8000;

const server = app.listen(PORT, "0.0.0.0", function () {
  console.log(`Server is up and running on port ${PORT}`);
});
