import { Router } from "express";
import * as controller from "../controllers/folderController";
import { validate } from "../validators/validate";
import { idParamSchema } from "../validators/idSchema";
import { folderCreateSchema, folderUpdateSchema } from "../validators/folderSchemas";
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
folderRouter.get(
	"/:id",
	validate("params", idParamSchema),
	controller.getFolder,
);

// GET ALL FILES IN A FOLDER
folderRouter.get(
	"/:id/files",
	validate("params", idParamSchema),
	controller.getFilesInFolder,
);

// UPLOAD A FOLDER
folderRouter.post(
	"/",
	validate("body", folderCreateSchema),
	controller.createFolder,
);

// UPDATE AN EXISTING FOLDER
folderRouter.patch(
	"/:id",
	validate("params", idParamSchema),
    validate("body", folderUpdateSchema),
	controller.updateFolder,
);

// DELETE A FOLDER
folderRouter.delete(
	"/:id",
	validate("params", idParamSchema),
	controller.deleteFolder,
);
