const contactsService = require("../services/contactsServices");
const ctrlWrapper = require("../helpers/ctrlWrapper");
const HttpError = require("../helpers/HttpError");

const getAllContacts = async (req, res) => {
  const result = await contactsService.listContacts();
  res.json(result);
};

const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await contactsService.getContactById(id);
  if (!result) {
    throw HttpError(404, "Not Found");
  }
  res.json(result);
};

const deleteContact = (req, res) => {};

const createContact = (req, res) => {};

const updateContact = (req, res) => {};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getContactById: ctrlWrapper(getContactById),
};
