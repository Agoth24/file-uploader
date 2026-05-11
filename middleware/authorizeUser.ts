import type { Request, Response, NextFunction } from "express"
import { AppError } from "../lib/AppError"

export const authorizeUser = (req: Request<{id: string}>, res: Response, next: NextFunction) => {

     if (req.user?.id === req.params.id) {
        return next()
    }
    throw new AppError(401, "Unauthorized")
}