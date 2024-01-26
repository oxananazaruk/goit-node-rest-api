const { ctrlWrapper, HttpError } = require("../helpers");
const Contact = require("../models/contact");

const getAllContacts = async (req, res) => {
  const result = await Contact.find();
  res.json(result);
};

const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndDelete(id);
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

const createContact = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};
const updateStatusContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};
// const updateContact = async (req, res) => {
//   const { id } = req.params;
//   if (JSON.stringify(req.body) === "{}") {
//     throw HttpError(400, "Body must have at least one field");
//   }
//   const result = await contactsService.updateContact(id, req.body);
//   if (!result) {
//     throw HttpError(404);
//   }
//   res.json(result);
// };

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getContactById: ctrlWrapper(getContactById),
  deleteContact: ctrlWrapper(deleteContact),
  createContact: ctrlWrapper(createContact),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
