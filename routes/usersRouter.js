const express = require("express");
const ctrl = require("../controllers/usersControllers");
const { validateBody } = require("../middlewares");
const authSchema = require("../schemas/usersSchema");

const usersRouter = express.Router();

usersRouter.post("/register", validateBody(authSchema), ctrl.register);
//
module.exports = usersRouter;
