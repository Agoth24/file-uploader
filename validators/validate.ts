import type { ZodType } from "zod";

import type { RequestHandler, Request, Response, NextFunction } from "express";

type RequestField = "body" | "params";

export const validateBody =
	<T>(field: RequestField, schema: ZodType<T>): RequestHandler =>
	(req: Request, res: Response, next: NextFunction): void => {
		const result = schema.safeParse(req.body);

		if (!result.success) {
			res.status(400).json({
				error: {
					statusCode: 400,
					message: "Validation Failed",
					issues: result.error.issues.map((e) => ({
						field: e.path[0],
						message: e.message,
					})),
				},
			});
			return;
		}
        
		req[field] = result.data;
		next();
	};
