import { Router } from "express";
import *  as controller from "../controllers/userController"
export const userRouter = Router();

// PATCH /users/:userId
// DELETE /users/:userId

// UPDATE A USER
userRouter.patch("/:userId", controller.updateUser)

// DELETE A USER
userRouter.delete("/:userId", controller.updateUser)
