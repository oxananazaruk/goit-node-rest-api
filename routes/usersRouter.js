const express = require("express");
const ctrl = require("../controllers/usersControllers");
const { validateBody, authMiddleware } = require("../middlewares");
const { userAuthSchema, updateUserSchema } = require("../schemas/usersSchema");

const usersRouter = express.Router();

usersRouter.post("/register", validateBody(userAuthSchema), ctrl.register);
usersRouter.post("/login", validateBody(userAuthSchema), ctrl.login);
usersRouter.post("/logout", authMiddleware, ctrl.logout);
usersRouter.get("/current", authMiddleware, ctrl.getCurrent);
usersRouter.patch("/", validateBody(updateUserSchema), ctrl.updateUser);

module.exports = usersRouter;
