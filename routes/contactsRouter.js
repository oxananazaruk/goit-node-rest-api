const express = require("express");
const ctrl = require("../controllers/contactsControllers.js");
const { validateBody, isValidId } = require("../middlewares");
const {
  createContactSchema,
  updateContactSchema,
} = require("../schemas/contactsSchemas.js");

const contactsRouter = express.Router();

contactsRouter.get("/", ctrl.getAllContacts);

contactsRouter.get("/:id", isValidId, ctrl.getContactById);

contactsRouter.delete("/:id", isValidId, ctrl.deleteContact);

contactsRouter.post("/", validateBody(createContactSchema), ctrl.createContact);

contactsRouter.patch(
  "/:id/favorite",
  isValidId,
  validateBody(updateContactSchema),
  ctrl.updateStatusContact
);

module.exports = contactsRouter;
