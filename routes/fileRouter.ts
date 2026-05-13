import { Router } from "express";
import * as controller from "../controllers/fileController";
import { validate } from "../validators/validate";
import { idParamSchema } from "../validators/idSchema";
import { fileCreateSchema, fileUpdateSchema } from "../validators/fileSchemas";
export const fileRouter = Router();

// GET /files
// GET /files/:filerId
// GET /files/:filerId/download
// POST /files
// PATCH /files/:id
// DELETE /files/:id

// GET ALL FILES
fileRouter.get("/", controller.getFiles);

// GET ONE FILE
fileRouter.get("/:id", validate("params", idParamSchema), controller.getFile);

// DOWNLOAD A FILE
fileRouter.get(
	"/:id/download",
	validate("params", idParamSchema),
	controller.downloadFile,
);

// UPLOAD A FILE
fileRouter.post("/", validate("body", fileCreateSchema), controller.uploadFile);

// UPDATE AN EXISTING FILE
fileRouter.patch(
	"/:id",
	validate("params", idParamSchema),
	validate("body", fileUpdateSchema),
	controller.updateFile,
);

// DELETE A FILE
fileRouter.delete(
	"/:id",
	validate("params", idParamSchema),
	controller.deleteFile,
);
