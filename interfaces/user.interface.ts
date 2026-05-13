import { z } from "zod";
import { userUpdateSchema } from "../validators/userSchemas";

export type UserUpdateDTO = z.infer<typeof userUpdateSchema>;