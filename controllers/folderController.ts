import type { Folder } from "../generated/prisma/client";
import type { Request, Response } from "express";
import * as FolderService from "../services/folderServices";

export const getFolders = async (req: Request, res: Response) => {
	const folders = await FolderService.getFolders();
	return res.status(200).json(folders);
};

export const getFolder = async (
	req: Request<{ id: number }>,
	res: Response,
) => {
	const { id } = req.params;
	const folders = await FolderService.getFolderById(id);
	return res.status(200).json(folders);
};

export const downloadFolder = async (
	req: Request<{ id: number }>,
	res: Response,
) => {
	const { id } = req.params;
	const folder = await FolderService.getFolderById(id);
	// IMPLEMENT DOWNLOAD FEATURE
};

export const createFolder = async (req: Request, res: Response) => {
	const data: Folder = req.body;
	const folder = await FolderService.createFolder(data);
	return res.status(201).json(folder);
};

export const updateFolder = async (
	req: Request<{ id: number }>,
	res: Response,
) => {
	const { id } = req.params;
	const data: Partial<Folder> = req.body;
	const folder = await FolderService.updateFolderById(id, data);
	return res.status(200).json(folder);
};

const deleteFolder = async (req: Request<{ id: number }>, res: Response) => {
	const { id } = req.params;
	await FolderService.deleteFolder(id);
	return res.status(204);
};
