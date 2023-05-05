/**
 * @summary - Payrate Model
 */

const dynamoose = require("dynamoose");

const staffPayRateSchema = new dynamoose.Schema(
  {
    type: { type: String, required: true, trim: true },
    salaryToggle: { type: Boolean, required: true, trim: true },
  },
  { timestamps: true }
);

const UsersPayRateModel = dynamoose.model("userstable", staffPayRateSchema, {
  create: true,
  // throughput: {
  //   read: 5,
  //   write: 5,
  // },
  throughput: "ON_DEMAND",
});
module.exports = { UsersPayRateModel };
