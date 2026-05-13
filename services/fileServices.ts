import { prisma } from "../lib/prisma";
import type { File } from "../generated/prisma/client";
import { ApiError } from "../lib/ApiError";

/*
 *   Return not found for single single resources, empty json for multiples.
 */

export const getFiles = async (userId: string) => {
	return await prisma.file.findMany({
		where: {
			userId,
		},
	});
};

export const getFileById = async (userId: string, fileId: number) => {
	const file = await prisma.file.findFirst({
		where: { id: fileId, userId },
	});

	if (!file) throw new ApiError(404, "File Not Found");
	return file;
};

export const uploadFile = async (userId: string, fileData: File) => {
	return await prisma.file.create({
		data: { ...fileData, userId },
	});
};

export const updateFileById = async (
	userId: string,
	fileId: number,
	fileData: Partial<File>,
) => {
	const numUpdated = await prisma.file.updateMany({
		where: { id: fileId, userId },
		data: { ...fileData, userId },
	});

	if (numUpdated.count === 0) throw new ApiError(404, "File Not found");
	return numUpdated;
};

export const deleteFileById = async (userId: string, fileId: number) => {
	const numDeleted = await prisma.file.deleteMany({
		where: { id: fileId, userId },
	});

	if (numDeleted.count === 0) throw new ApiError(404, "File not found");
	return numDeleted;
};
