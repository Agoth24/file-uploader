import { Router } from "express";

export const fileRouter = Router();

// GET /files
// GET /files/:filerId
// GET /files/:filerId/download
// POST /files
// PUT /files/:fileId
// DELETE /files/:fileId

fileRouter.get("/")

fileRouter.get("/:fileId")

fileRouter.get("/:fileId/download")

fileRouter.post("/")

fileRouter.put("/:fileId")

fileRouter.delete("/:fileId")