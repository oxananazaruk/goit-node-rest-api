const express = require("express");
const ctrl = require("../controllers/usersControllers");
const { validateBody } = require("../middlewares");
const userAuthSchema = require("../schemas/usersSchema");

const usersRouter = express.Router();

usersRouter.post("/register", validateBody(userAuthSchema), ctrl.register);
usersRouter.post("/login", validateBody(userAuthSchema), ctrl.login);

module.exports = usersRouter;
