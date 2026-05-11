import { Router } from "express";
import * as controller from "../controllers/fileController";
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
fileRouter.get("/:id", controller.getFile);

// DOWNLOAD A FILE
fileRouter.get("/:id/download", controller.downloadFile);

// UPLOAD A FILE
fileRouter.post("/", controller.uploadFile);

// UPDATE AN EXISTING FILE
fileRouter.patch("/:id", controller.updateFile);

// DELETE A FILE
fileRouter.delete("/:id", controller.deleteFile);
