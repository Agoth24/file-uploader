import { Router } from "express";
import *  as controller from "../controllers/userController"
import { requireAuth } from "../middleware/requireAuth";
export const userRouter = Router();

// PATCH /users/:userId
// DELETE /users/:userId

// UPDATE A USER
userRouter.patch("/:userId", requireAuth, controller.updateUser)

// DELETE A USER
userRouter.delete("/:userId", requireAuth, controller.updateUser)
