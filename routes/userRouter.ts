import { Router } from "express";
import *  as controller from "../controllers/userController"
export const userRouter = Router();

// PATCH /users/:userId
// DELETE /users/:userId

// UPDATE A USER
userRouter.patch("/me", controller.updateUser)

// DELETE A USER
userRouter.delete("/me", controller.deleteUser)
