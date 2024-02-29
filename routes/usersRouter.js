const express = require("express");
const ctrl = require("../controllers/usersControllers");
const { validateBody, authMiddleware, upload } = require("../middlewares");
const {
  userAuthSchema,
  updateUserSchema,
  emailSchema,
} = require("../schemas/usersSchema");

const usersRouter = express.Router();

usersRouter.post("/register", validateBody(userAuthSchema), ctrl.register);
usersRouter.get("/verify/:verificationToken", ctrl.verifyEmail);
usersRouter.post("/verify", validateBody(emailSchema), ctrl.resendVerifyEmail);

usersRouter.post("/login", validateBody(userAuthSchema), ctrl.login);
usersRouter.post("/logout", authMiddleware, ctrl.logout);
usersRouter.get("/current", authMiddleware, ctrl.getCurrent);

usersRouter.patch(
  "/avatars",
  authMiddleware,
  upload.single("avatar"),
  ctrl.updateAvatar
);
usersRouter.patch("/:id", validateBody(updateUserSchema), ctrl.updateUser);

module.exports = usersRouter;
