const express = require("express");
const ctrl = require("../controllers/contactsControllers.js");
const { validateBody, isValidId, authMiddleware } = require("../middlewares");
const {
  createContactSchema,
  updateContactSchema,
} = require("../schemas/contactsSchemas.js");

const contactsRouter = express.Router();

contactsRouter.get("/", authMiddleware, ctrl.getAllContacts);

contactsRouter.get("/:id", authMiddleware, isValidId, ctrl.getContactById);

contactsRouter.delete("/:id", authMiddleware, isValidId, ctrl.deleteContact);

contactsRouter.post(
  "/",
  authMiddleware,
  validateBody(createContactSchema),
  ctrl.createContact
);

contactsRouter.patch(
  "/:id/favorite",
  authMiddleware,
  isValidId,
  validateBody(updateContactSchema),
  ctrl.updateStatusContact
);

module.exports = contactsRouter;
