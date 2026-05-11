import { Request } from "express";


// Declaration merging
// extend the Request Interface by adding a user field
declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string,
                email: string,
                name: string
            }
        }
    }
}