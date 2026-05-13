import type { Request, Response } from "express";
import * as FileService from "../services/fileServices";
import type { FileUpdateBodyDTO, FileUploadBodyDTO } from "../interfaces/file.interface";

export const getFiles = async (req: Request, res: Response) => {
	const userId = req.user!.id;
	const files = await FileService.getFiles(userId);
	return res.status(200).json(files);
};

export const getFile = async (req: Request<{ id: string }>, res: Response) => {
	const userId = req.user!.id;
	const fileId = parseInt(req.params.id);
	const file = await FileService.getFileById(userId, fileId);
	return res.status(200).json(file);
};

export const downloadFile = async (
	req: Request<{ id: string }>,
	res: Response,
) => {
	const userId = req.user!.id;
	const fileId = parseInt(req.params.id);
	const file = await FileService.getFileById(userId, fileId);
	// ADD DOWNLOAD FUNCTIONALITY
};

export const uploadFile = async (req: Request, res: Response) => {
	const userId = req.user!.id;
	const userFileData: FileUploadBodyDTO = req.body;
    // add multer stuff here
	const file = await FileService.uploadFile(userId, userFileData);
	return res.status(201).json(file);
};

export const updateFile = async (
	req: Request<{ id: string }>,
	res: Response,
) => {
	const userId = req.user!.id;
	const fileId = parseInt(req.params.id);
	const userFileData: Partial<FileUpdateBodyDTO> = req.body;
	const filesUpdated = await FileService.updateFileById(userId, fileId, userFileData);
	return res.status(200).json({
        filesUpdated: filesUpdated
    });
};

export const deleteFile = async (
	req: Request<{ id: string }>,
	res: Response,
) => {
	const userId = req.user!.id;
	const fileId = parseInt(req.params.id);
	await FileService.deleteFileById(userId, fileId);
	return res.status(204).send();
};
