import {prisma} from "../lib/prisma"
import type { Folder } from "../generated/prisma/client"

export const getFolders = async () => {
    return await prisma.folder.findMany();
}

export const getFolder = async (id: number) => {
    return await prisma.folder.findUnique({where: {id}})
}

export const createFolder = async (folder: Folder) => {
   return await prisma.folder.create({data: folder})
}

export const updateFolder = async (id: number, data: Partial<Folder>) => {
    return await prisma.folder.update({where: {id}, data})
}

export const deleteFolder = async (id: number) => {
    return await prisma.folder.delete({where: {id}})
}