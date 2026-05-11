import { Router } from "express";
import * as controller from "../controllers/folderController";
import { requireAuth } from "../middleware/requireAuth";
import { authorizeUser } from "../middleware/authorizeUser";
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
folderRouter.get("/:id", authorizeUser, controller.getFolder);

// GET ALL FILES IN A FOLDER
folderRouter.get("/:id/files", authorizeUser, controller.getFilesInFolder);

// UPLOAD A FOLDER
folderRouter.post("/", controller.createFolder);

// UPDATE AN EXISTING FOLDER
folderRouter.patch("/:id",  authorizeUser, controller.updateFolder);

// DELETE A FOLDER
folderRouter.delete("/folderId", authorizeUser, controller.deleteFolder);
