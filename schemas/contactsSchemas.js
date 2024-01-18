const Joi = require("joi");

const createContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
    })
    .required(),
  phone: Joi.string()
    .pattern(/^\d{10}$/)
    .required(),
});

const updateContactSchema = Joi.object({});

module.exports = {
  createContactSchema,
};
