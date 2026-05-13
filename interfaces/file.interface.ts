import {z} from "zod"
import { fileCreateSchema, fileUpdateSchema } from "../validators/fileSchemas"

export type FileUploadBodyDTO = z.infer<typeof fileCreateSchema>
export type FileUpdateBodyDTO = z.infer<typeof fileUpdateSchema>

export type FileServiceDTO = FileUploadBodyDTO & {
    size: number,
    mimetype: string,
    url: string,
    userId: string,
}