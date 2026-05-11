import { prisma } from "../lib/prisma";
import type { Folder } from "../generated/prisma/client";

export const getFolders = async (userId: string) => {
	return await prisma.folder.findMany({ where: { userId } });
};

export const getFolderById = async (userId: string, folderId: number) => {
	return await prisma.folder.findFirst({ where: { id: folderId, userId } });
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

export const createFolder = async (userId: string, folderData: Folder) => {
	return await prisma.folder.create({ data: { ...folderData, userId } });
};

export const updateFolderById = async (
	userId: string,
	folderId: number,
	folderData: Partial<Folder>,
) => {
	return await prisma.folder.updateMany({
		where: { id: folderId, userId },
		data: { ...folderData, userId },
	});
};

export const deleteFolder = async (userId: string, folderId: number) => {
	return await prisma.folder.deleteMany({ where: { id: folderId, userId } });
};