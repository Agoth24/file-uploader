import { z } from "zod";

export const idParamSchema = z.object({
	id: z.coerce.number().int().positive({ message: "id must be positive" }),
});
