const Joi = require("joi");

const createContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({
    minDomainSegments: 2,
  }),
  phone: Joi.string(),
  favorite: Joi.boolean(),
});

const updateContactSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

module.exports = {
  createContactSchema,
  updateContactSchema,
};
