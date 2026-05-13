import { z } from "zod";

export const fileCreateSchema = z.object({
		name: z
			.string()
			.trim()
			.min(1, { message: "Filename cannot be empty" })
			.max(255, { message: "Max filename size is 255 characters" }),
		folderId: z.coerce
			.number()
			.min(1, { message: "folderId cannot be empty" })
			.optional(),
});

export const fileUpdateSchema = z.object({
		name: z
			.string()
			.trim()
			.min(1, { message: "Filename cannot be empty" })
			.max(255, { message: "Max filename size is 255 characters" }).optional(),
		folderId: z.coerce
			.number()
			.min(1, { message: "folderId cannot be empty" })
			.optional(),
});
