import { Router } from "express";
import *  as controller from "../controllers/userController"
import { authorizeUser } from "../middleware/authorizeUser";
export const userRouter = Router();

// PATCH /users/:userId
// DELETE /users/:userId

// UPDATE A USER
userRouter.patch("/:id", authorizeUser, controller.updateUser)

// DELETE A USER
userRouter.delete("/:id", authorizeUser, controller.updateUser)
