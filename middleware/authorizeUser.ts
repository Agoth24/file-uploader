import type { Request, Response, NextFunction } from "express"
import { ApiError } from "../lib/ApiError"

export const authorizeUser = (req: Request<{id: string}>, res: Response, next: NextFunction) => {

     if (req.user?.id === req.params.id) {
        return next()
    }
    throw new ApiError(401, "Unauthorized")
}