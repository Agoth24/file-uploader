import type { File } from "../generated/prisma/client";
import type { Request, Response } from "express";
import * as FileService from "../services/fileServices";

export const getFiles = async (req: Request, res: Response) => {};

export const getFile = async (
	req: Request<{ id: string }>,
	res: Response,
) => {
	const id = parseInt(req.params.id);
	const file = await FileService.getFileById(id);
	return res.status(200).json(file);
};

export const downloadFile = async (
	req: Request<{ id: string }>,
	res: Response,
) => {
	const id = parseInt(req.params.id);
	const file = await FileService.getFileById(id);
	// ADD DOWNLOAD FUNCTIONALITY
};

export const uploadFile = async (req: Request, res: Response) => {
	const data: File = req.body;
	const file = await FileService.uploadFile(data);
	return res.status(201).json(file);
};

export const updateFile = async (
	req: Request<{ id: string }>,
	res: Response,
) => {
	const id = parseInt(req.params.id);
	const data: Partial<File> = req.body;
	const file = await FileService.updateFileById(id, data);
	return res.status(200).json(file);
};

export const deleteFile = async (
	req: Request<{ id: string }>,
	res: Response,
) => {
	const id = parseInt(req.params.id);
	await FileService.deleteFileById(id);
	return res.status(204);
};
