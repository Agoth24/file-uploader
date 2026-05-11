import type { File } from "../generated/prisma/client";
import type { Request, Response } from "express";
import * as FileService from "../services/fileServices";

export const getFiles = async (req: Request, res: Response) => {};

export const getFile = async (req: Request<{ fileId: number }>, res: Response) => {
	const { fileId } = req.params;
	const file = await FileService.getFileById(fileId);
	return res.status(200).json(file);
};

export const downloadFile = async (
	req: Request<{ fileId: number }>,
	res: Response,
) => {
	const { fileId } = req.params;
	const file = await FileService.getFileById(fileId);
	// ADD DOWNLOAD FUNCTIONALITY

};

export const uploadFile = async (req: Request, res: Response) => {
	const data: File = req.body;
	const file = await FileService.uploadFile(data);
	return res.status(201).json(file);
};

export const updateFile = async (
	req: Request<{ fileId: number }>,
	res: Response,
) => {
	const { fileId } = req.params;
    const data: Partial<File> = req.body;
    const file = await FileService.updateFileById(fileId, data)
    return res.status(200).json(file)
};

export const deleteFile = async (
	req: Request<{ fileId: number }>,
	res: Response,
) => {
    const {fileId} = req.params;
    await FileService.deleteFileById(fileId)
    return res.status(204)
};
