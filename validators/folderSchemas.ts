import { z } from "zod";

export const folderCreateSchema = z.object({
	name: z
		.string()
		.trim()
		.min(1, { message: "Folder name cannot be empty" })
		.max(32, { message: "Max folder name is 32 characters" }),
});

export const folderUpdateSchema = z.object({
	name: z
		.string()
		.trim()
		.min(1, { message: "Folder name cannot be empty" })
		.max(32, { message: "Max folder name is 32 characters" })
		.optional(),
});
