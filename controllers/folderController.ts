import type { Folder } from "../generated/prisma/client";
import type { Request, Response } from "express";
import * as FolderService from "../services/folderServices";

export const getFolders = async (req: Request, res: Response) => {
	const folders = await FolderService.getFolders();
	return res.status(200).json(folders);
};

export const getFolder = async (
	req: Request<{ folderId: number }>,
	res: Response,
) => {
	const { folderId } = req.params;
	const folders = await FolderService.getFolderById(folderId);
	return res.status(200).json(folders);
};

// export const downloadFolder = async (
// 	req: Request<{ folderId: number }>,
// 	res: Response,
// ) => {
// 	const { folderId } = req.params;
// 	const folder = await FolderService.getFolderById(folderId);
// 	// IMPLEMENT DOWNLOAD FEATURE
// };

export const getFilesInFolder = async (
	req: Request<{ folderId: number }>,
	res: Response,
) => {
    const {folderId} = req.params;
    const files = await FolderService.getFilesInFolderById(folderId);
    return res.status(200).json(files);
    
}

export const createFolder = async (req: Request, res: Response) => {
	const data: Folder = req.body;
	const folder = await FolderService.createFolder(data);
	return res.status(201).json(folder);
};

export const updateFolder = async (
	req: Request<{ folderId: number }>,
	res: Response,
) => {
	const { folderId } = req.params;
	const data: Partial<Folder> = req.body;
	const folder = await FolderService.updateFolderById(folderId, data);
	return res.status(200).json(folder);
};

export const deleteFolder = async (req: Request<{ folderId: number }>, res: Response) => {
	const { folderId } = req.params;
	await FolderService.deleteFolder(folderId);
	return res.status(204);
};
