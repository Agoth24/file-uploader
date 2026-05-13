import type { FolderCreateDTO } from "../interfaces/folder.interface";
import { prisma } from "../lib/prisma";
import { ApiError } from "../lib/ApiError";

export const getFolders = async (userId: string) => {
	return await prisma.folder.findMany({ where: { userId } });
};

export const getFolderById = async (userId: string, folderId: number) => {
	const folder = await prisma.folder.findFirst({
		where: { id: folderId, userId },
	});
	if (!folder) throw new ApiError(404, "Folder not found");
	return folder;
};

export const getFilesInFolderById = async (
	userId: string,
	folderId: number,
) => {
	return await prisma.folder.findFirst({
		where: { id: folderId, userId },
		select: { files: true },
	});
};

export const createFolder = async (userId: string, folderData: FolderCreateDTO) => {
	return await prisma.folder.create({ data: { ...folderData, userId } });
};

export const updateFolderById = async (
	userId: string,
	folderId: number,
	folderData: Partial<FolderCreateDTO>,
) => {
	const numUpdated = await prisma.folder.updateMany({
		where: { id: folderId, userId },
		data: { ...folderData, userId },
	});

    if (numUpdated.count === 0) throw new ApiError(404, "Folder not found");
	return numUpdated;
};

export const deleteFolder = async (userId: string, folderId: number) => {
	const numDeleted = await prisma.folder.deleteMany({ where: { id: folderId, userId } });

    if (numDeleted.count === 0) throw new ApiError(404, "Folder not found");
	return numDeleted;
};
