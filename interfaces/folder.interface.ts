import {z} from "zod"
import { folderCreateSchema, folderUpdateSchema } from "../validators/folderSchemas"

export type FolderCreateDTO = z.infer<typeof folderCreateSchema>
export type FolderUpdateDTO = z.infer<typeof folderUpdateSchema>

export type FolderServiceDTO = FolderCreateDTO;