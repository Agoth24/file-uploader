import { prisma } from "../lib/prisma";
import type { File } from "../generated/prisma/client";

export const getFiles = async () => {
	return await prisma.file.findMany();
};

export const getFileById = async (id: number) => {
	return await prisma.file.findUnique({
		where: { id },
	});
};

export const uploadFile = async (file: File) => {
	return await prisma.file.create({
		data: file,
	});
};

export const updateFileById = async (id: number, data: Partial<File>) => {
	return await prisma.file.update({
		where: { id },
		data,
	});
};

export const deleteFileById = async (id: number) => {
	return await prisma.file.delete({ where: { id } });
};
