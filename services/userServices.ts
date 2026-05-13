import { prisma } from "../lib/prisma";
import type { UserServiceDTO } from "../interfaces/user.interface";
import { ApiError } from "../lib/ApiError";

export const updateUser = async (id: string, data: Partial<UserServiceDTO>) => {
	const user = await prisma.user.update({
		where: {
			id,
		},
		data: { ...data, id },
	});

	if (!user) throw new ApiError(404, "User not found");
	return user;
};

export const deleteUser = async (id: string) => {
	const user = await prisma.user.delete({
		where: {
			id,
		},
	});

	if (!user) throw new ApiError(404, "User not found");
	return user;
};
