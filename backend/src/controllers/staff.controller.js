/**
 * @summary - Staff controller
 */
const _ = require("lodash");
const Joi = require("joi");
const StaffUsers = require("../models/staff.model");
const { PhoneNumberRegExp } = require("../constants/default.constants");
const { v4: uuidv4 } = require("uuid");

async function addStaff(req, res, next) {
  try {
    const schema = Joi.object().keys({
      firstName: Joi.string().required().messages({
        "string.empty": "firstName is Required",
      }),
      lastName: Joi.string().required().messages({
        "string.empty": "lastName is Required",
      }),
      email: Joi.string().email().required().messages({
        "string.empty": "Email is Required",
        "string.email": "Invalid Email",
      }),
      phone: Joi.string().regex(PhoneNumberRegExp).required().messages({
        "string.pattern.base": "Invalid Phone Number",
        "string.empty": "Phone Number is Required",
      }),
      emergPhone: Joi.string().regex(PhoneNumberRegExp).required().messages({
        "string.pattern.base": "Invalid emergPhone Number",
        "string.empty": "Phone Number is Required",
      }),
      addressLine1: Joi.string().required().messages({
        "string.empty": "AddressLine1 is Required",
      }),
      addressLine2: Joi.string().required().messages({
        "string.empty": "AddressLine2 is Required",
      }),
      city: Joi.string().required().messages({
        "string.empty": "City is Required",
      }),
      state: Joi.string().required().messages({
        "string.empty": "State is Required",
      }),
      postalCode: Joi.number().required().messages({
        "string.empty": "PostalCode is Required",
      }),
      payRateType: Joi.string().required().messages({
        "string.empty": "PayRateType is Required",
      }),
      role: Joi.string().required().messages({
        "string.empty": "Role is Required",
      }),
    });

    let { value, error } = schema.validate({ ...req.body });
    const valid = error == null;
    if (!valid) {
      return res.status(400).json({
        status: "error",
        message: "Invalid request data",
        data: {
          original: error._object,
          details: _.map(error.details, ({ message, type }) => ({
            message: message.replace(/['"]/g, ""),
            type,
          })),
        },
      });
    }

    const newAddStaff = await StaffUsers.UsersModel.create({
      ...value,
      id: uuidv4(),
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      phone: value.phone,
      emergPhone: value.emergPhone,
      addressLine1: value.addressLine1,
      addressLine2: value.addressLine2,
      city: value.city,
      state: value.state,
      postalCode: value.postalCode,
      payRateType: value.payRateType,
      role: value.role,
    });
    console.log("aaa", newAddStaff);

    return res.json({
      status: "success",
      message: "Add Staff Created successfully",
      data: {
        ...newAddStaff,
      },
    });
  } catch (e) {
    return res.status(500).send({
      status: "error",
      message: e.message,
    });
  }
}

module.exports = {
  addStaff,
};
