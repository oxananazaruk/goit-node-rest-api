const Joi = require("joi");
const { subscriptionList } = require("../models/user");

const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

const userAuthSchema = Joi.object({
  email: Joi.string().pattern(emailRegex).required(),
  password: Joi.string().min(6).required(),
});

const updateUserSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subscriptionList)
    .required(),
});

const emailSchema = Joi.object({
  email: Joi.string()
    .pattern(emailRegex)
    .required("missing required field email"),
});

module.exports = { userAuthSchema, updateUserSchema, emailSchema };
