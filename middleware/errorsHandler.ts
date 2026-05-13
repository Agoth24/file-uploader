import type { NextFunction, Request, Response } from "express";
import { AppError } from "../lib/ApiError";

export const errorHandler = async (
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	if (err instanceof AppError) {
		return res.status(err.statusCode).json({
			error: {
				statusCode: err.statusCode,
				message: err.message,
			},
		});
	}

    return res.status(500).json({
        error: {
            statusCode: 500,
            message: "Internal server error"
        }
    })
};
