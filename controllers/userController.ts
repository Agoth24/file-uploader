import type { Request, Response } from "express";
import * as UserService from "../services/userServices";

export const updateUser = async (
	req: Request<{ id: string }>,
	res: Response,
) => {
	const { id } = req.params;
	const data = req.body;
	const user = await UserService.updateUser(id, data);
	return res.status(200).json(user);
};

export const deleteUser = async (
	req: Request<{ id: string }>,
	res: Response,
) => {
	const { id } = req.params;
	await UserService.deleteUser(id);
	return res.status(204).send();
};
