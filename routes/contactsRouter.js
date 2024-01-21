const express = require("express");
const ctrl = require("../controllers/contactsControllers.js");
const validateBody = require("../helpers/validateBody.js");
const { createContactSchema } = require("../schemas/contactsSchemas.js");
const { updateContactSchema } = require("../schemas/contactsSchemas");

const contactsRouter = express.Router();

contactsRouter.get("/", ctrl.getAllContacts);

contactsRouter.get("/:id", ctrl.getContactById);

contactsRouter.delete("/:id", ctrl.deleteContact);

contactsRouter.post("/", validateBody(createContactSchema), ctrl.createContact);

contactsRouter.put(
  "/:id",
  validateBody(updateContactSchema),
  ctrl.updateContact
);

module.exports = contactsRouter;
