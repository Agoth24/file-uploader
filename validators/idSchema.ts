import { z } from "zod";

export const idParamSchema = z.object({
	id: z.coerce
		.number()
		.int()
		.nonnegative({ message: "id cannot be negative" }),
});
