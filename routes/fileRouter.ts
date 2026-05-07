import { Router } from "express";

export const fileRouter = Router();

// GET /files
// GET /files/:filerId
// GET /files/:filerId/download
// POST /files
// PUT /files/:fileId
// DELETE /files/:fileId

// GET ALL FILES
// fileRouter.get("/")

// GET ONE FILE
// fileRouter.get("/:fileId")

// DOWNLOAD A FILE
// fileRouter.get("/:fileId/download")

// UPLOAD A FILE
// fileRouter.post("/")

// UPDATE AN EXISTING FILE
// fileRouter.put("/:fileId")

// DELETE A FILE
// fileRouter.delete("/:fileId")