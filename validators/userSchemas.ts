import { z } from "zod";

export const userUpdateSchema = z.object({
	name: z
		.string()
		.trim()
		.min(1, { message: "Username cannot be empty" })
		.max(32, {
			message: "Username cannot be longer than 32 characters",
		}).optional(),
	email: z
		.email()
		.trim()
		.min(1, { message: "Email cannot be empty" })
		.max(255, {
			message: "Email cannot be longer than 255 characters",
		}).optional(),
});
