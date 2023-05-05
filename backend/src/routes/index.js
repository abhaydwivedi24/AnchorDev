const express = require("express");
const addStaffRoutes = require("./staff.routes");

const router = express.Router();

router.post("/addStaff", function (req, res) {
  const {
    firstName,
    lastName,
    email,
    phone,
    emergPhone,
    addressLine1,
    addressLine2,
    city,
    state,
    postalCode,
    payRateType,
    role,
  } = req.body;

  const paramsInsert = {
    TableName: "demo_sdk",
    Item: {
      firstName,
      lastName,
      email,
      phone,
      emergPhone,
      addressLine1,
      addressLine2,
      city,
      state,
      postalCode,
      payRateType,
      role,
    },
  };
});

module.exports = router;
