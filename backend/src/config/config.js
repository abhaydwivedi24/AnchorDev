// const Joi = require("joi");

// // require and configure dotenv, will load vars in .env in PROCESS.ENV
// require("dotenv").config();

// // define validation for all the env vars
// const envVarsSchema = Joi.object({
//   JWT_SECRET: Joi.string()
//     .required()
//     .description("JWT Secret required to sign")

// })
//   .unknown()
//   .required();

// const { error, value: envVars } = envVarsSchema.validate(process.env);
// if (error) {
//   throw new Error(`Config validation error: ${error.message}`);
// }
// const config = {
//   jwtSecret: envVars.JWT_SECRET,
// };

// module.exports = config;

// // Create new DynamoDB instance
// const ddb = new dynamoose.aws.ddb.DynamoDB({
//     "credentials": {
//         "accessKeyId": "AKID",
//         "secretAccessKey": "SECRET"
//     },
//     "region": "us-east-1"
// });

// // Set DynamoDB instance to the Dynamoose DDB instance
// dynamoose.aws.ddb.set(ddb);

// const ddb = new DynamoDB({
//   region: 'us-east-1'
// })

// dynamoose.aws.ddb.local("http://localhost:8000");
