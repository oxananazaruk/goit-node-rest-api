const express = require("express");
const ctrl = require("../controllers/contactsControllers.js");

const contactsRouter = express.Router();

contactsRouter.get("/", ctrl.getAllContacts);

contactsRouter.get("/:id", ctrl.getContactById);

contactsRouter.delete("/:id", ctrl.deleteContact);

// contactsRouter.post("/", ctrl.createContact);

// contactsRouter.put("/:id", ctrl.updateContact);

module.exports = contactsRouter;
