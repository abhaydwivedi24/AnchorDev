/**
 * @summary - Staff routes
 */
const express = require("express");
const addStaffController = require("../controllers/staff.controller");
const addStaffRouter = express.Router();

addStaffRouter.post("/", addStaffController.addStaff);

module.exports = addStaffRouter;
