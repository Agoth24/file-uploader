import { prisma } from "../lib/prisma";
import type { File } from "../generated/prisma/client";

export const getFiles = async (userId: string) => {
	return await prisma.file.findMany({
		where: {
			userId,
		},
	});
};

export const getFileById = async (userId: string, fileId: number) => {
	return await prisma.file.findFirst({
		where: { id: fileId, userId },
	});
};

export const uploadFile = async (userId: string, fileData: File) => {
	return await prisma.file.create({
		data: fileData,
	});
};

export const updateFileById = async (
	userId: string,
	fileId: number,
	fileData: Partial<File>,
) => {
	return await prisma.file.updateMany({
		where: { id: fileId, userId },
		data: fileData,
	});
};

export const deleteFileById = async (userId: string, fileId: number) => {
	return await prisma.file.deleteMany({ where: { id: fileId, userId } });
};