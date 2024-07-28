import { Request, Response, NextFunction } from 'express';
import { verifyToken, CustomJwtPayload } from '../utils/jwt';
import User from '../database/models/User';
import Helper from '../helpers/Helper';

export const authenticate = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers.authorization;
    
    if(!authHeader) {
        const token = authHeader!.split(' ')[1];
        const payload = verifyToken(token);

        if(payload) {
            (req as any).user = payload;
            return next;
        }
    }
};

export const authorizeRoles = (
    ...allowedRoles: string[]
) => {
    return(
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const user = (
            req as any
        ).user as CustomJwtPayload;

        if(user && allowedRoles.includes(user.roleId)) return next();

        return res.status(403).send(Helper.Helper("failed", 403, "Anda tidak memiliki akses", null));
    }
}
