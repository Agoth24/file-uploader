import { Router } from "express";
import * as controller from "../controllers/userController";
import { validate } from "../validators/validate";
import { updateUserSchema } from "../validators/userSchemas";
export const userRouter = Router();

// PATCH /users/:userId
// DELETE /users/:userId

// UPDATE A USER
userRouter.patch(
	"/me",
	validate("body", updateUserSchema),
	controller.updateUser,
);

// DELETE A USER
userRouter.delete("/me", controller.deleteUser);
