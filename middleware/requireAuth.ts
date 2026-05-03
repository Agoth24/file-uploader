import { fromNodeHeaders } from "better-auth/node";
import { auth } from "../lib/auth";
import type { Request, Response, NextFunction } from "express";

export const requireAuth = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const session = await auth.api.getSession({
		headers: fromNodeHeaders(req.headers),
	});
	if (!session) {
		return res.status(401).json({
			data: null,
			error: {
				code: "",
				message: "Not Authenticated",
			},
		});
	}
	req.user = session.user;
	next();
};
