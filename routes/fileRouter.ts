import { Router } from "express";
import * as controller from "../controllers/fileController";
import { requireAuth } from "../middleware/requireAuth";
export const fileRouter = Router();

// GET /files
// GET /files/:filerId
// GET /files/:filerId/download
// POST /files
// PATCH /files/:fileId
// DELETE /files/:fileId

// GET ALL FILES
fileRouter.get("/", controller.getFiles);

// GET ONE FILE
fileRouter.get("/:fileId", controller.getFile);

// DOWNLOAD A FILE
fileRouter.get("/:fileId/download", controller.downloadFile);

// UPLOAD A FILE
fileRouter.post("/", requireAuth, controller.uploadFile);

// UPDATE AN EXISTING FILE
fileRouter.patch("/:fileId", requireAuth, controller.updateFile);

// DELETE A FILE
fileRouter.delete("/:fileId", requireAuth, controller.deleteFile);
