import { Router } from "express";
import * as controller from "../controllers/folderController"
export const folderRouter = Router();


// GET /folders
// GET /folders/:folderId
// GET /folders/:folderId/files
// POST /folders
// PATCH /folders/:folderId
// DELETE /folders/:folderId


// GET ALL FOLDERS
folderRouter.get("/", controller.getFolders)

// GET ONE FOLDER
folderRouter.get("/:folderId", controller.getFolder)

// GET ALL FILES IN A FOLDER
folderRouter.get("/:folderId/files", controller.getFilesInFolder)

// UPLOAD A FOLDER
folderRouter.post("/", controller.createFolder)

// UPDATE AN EXISTING FOLDER
folderRouter.patch("/:folderId", controller.updateFolder)

// DELETE A FOLDER
folderRouter.delete("/fodlerId", controller.deleteFolder)