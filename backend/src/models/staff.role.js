/**
 * @summary - Staff role model
 */
const dynamoose = require("dynamoose");

const staffRoleSchema = new dynamoose.Schema(
  {
    role: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

const UsersRoleModel = dynamoose.model("userstable", staffRoleSchema, {
  create: true,
  throughput: "ON_DEMAND",
});
module.exports = { UsersRoleModel };
