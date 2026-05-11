import { prisma } from "../lib/prisma";
import type { User } from "../generated/prisma/client";

export const updateUser = async (id: string, data: Partial<User>) => {
	return await prisma.user.update({
		where: {
			id,
		},
		data: { ...data, id },
	});
};

export const deleteUser = async (id: string) => {
	return await prisma.user.delete({
		where: {
			id,
		},
	});
};
