import type { User } from "../generated/prisma/client";
import type { Request, Response } from "express";
import * as UserService from "../services/userServices";

export const updateUser = async (
	req: Request,
	res: Response,
) => {
	const userId = req.user!.id;
	const data: Partial<User> = req.body;
	const user = await UserService.updateUser(userId, data);
	return res.status(200).json(user);
};

export const deleteUser = async (
	req: Request,
	res: Response,
) => {
	const userId = req.user!.id;
	await UserService.deleteUser(userId);
	return res.status(204).send();
};
