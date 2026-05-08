import { Router } from "express";

export const folderRouter = Router();


// GET /folders
// GET /folders/:folderId
// GET /folders/:folderId/files
// POST /folders
// PATCH /folders/:folderId
// DELETE /folders/:folderId


// GET ALL FOLDERS
// folderRouter.get("/")

// GET ONE FOLDER
// folderRouter.get("/:folderId")

// GET ALL FILES IN A FOLDER
// folderRouter.get("/:folderId/files")

// UPLOAD A FOLDER
// folderRouter.post("/")

// UPDATE AN EXISTING FOLDER
// folderRouter.patch("/:folderId")

// DELETE A FOLDER
// folderRouter.delete("/fodlerId")