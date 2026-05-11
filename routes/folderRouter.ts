import { Router } from "express";
import * as controller from "../controllers/folderController";
export const folderRouter = Router();

// GET /folders
// GET /folders/:id
// GET /folders/:id/files
// POST /folders
// PATCH /folders/:id
// DELETE /folders/:id

// GET ALL FOLDERS
folderRouter.get("/", controller.getFolders);

// GET ONE FOLDER
folderRouter.get("/:id", controller.getFolder);

// GET ALL FILES IN A FOLDER
folderRouter.get("/:id/files", controller.getFilesInFolder);

// UPLOAD A FOLDER
folderRouter.post("/", controller.createFolder);

// UPDATE AN EXISTING FOLDER
folderRouter.patch("/:id", controller.updateFolder);

// DELETE A FOLDER
folderRouter.delete("/:id", controller.deleteFolder);
