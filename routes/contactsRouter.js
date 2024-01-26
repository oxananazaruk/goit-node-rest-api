const express = require("express");
const ctrl = require("../controllers/contactsControllers.js");
const { validateBody } = require("../helpers");
const {
  createContactSchema,
  updateContactSchema,
} = require("../schemas/contactsSchemas.js");

const contactsRouter = express.Router();

contactsRouter.get("/", ctrl.getAllContacts);

contactsRouter.get("/:id", ctrl.getContactById);

contactsRouter.delete("/:id", ctrl.deleteContact);

contactsRouter.post("/", validateBody(createContactSchema), ctrl.createContact);

contactsRouter.patch(
  "/:id/favorite",
  validateBody(updateContactSchema),
  ctrl.updateStatusContact
);

module.exports = contactsRouter;
