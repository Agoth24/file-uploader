import { Router } from "express";
import { auth } from "../lib/auth";
import { requireAuth } from "../middleware/requireAuth";

export const userRouter = Router();

// POST /users
// DELETE /users/:userId
// PUT /users/:userId


userRouter.get("/", requireAuth, (req, res) => {
    res.json({message: "Hello"})
})

// CREATE A USER
// userRouter.post("/", )

// UPDATE A USER
// userRouter.put("/:userId", )

// DELETE A USER
// userRouter.delete("/:userId", )
