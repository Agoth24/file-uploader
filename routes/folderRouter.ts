import { Router } from "express";

export const folderRouter = Router();


// GET /folders
// GET /folders/:folderId
// GET /folders/:folderId/files
// POST /folders
// PUT /folders/:folderId
// DELETE /folders/:folderId

folderRouter.get("/")

folderRouter.get("/:folderId")

folderRouter.get("/:folderId/files")

folderRouter.post("/")

folderRouter.put("/:folderId")

folderRouter.delete("/fodlerId")