import type { Request, Response } from "express";
import * as UserService from "../services/userServices";
import type { UserUpdateDTO } from "../interfaces/user.interface";

export const updateUser = async (
	req: Request,
	res: Response,
) => {
	const userId = req.user!.id;
	const data: UserUpdateDTO = req.body;
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
