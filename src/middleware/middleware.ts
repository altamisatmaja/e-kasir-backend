import { Request, Response, NextFunction } from 'express';
import { verifyToken, CustomJwtPayload } from '../utils/jwt';
import Helper from '../helpers/Helper';
import User from '../database/models/User';

export const authenticate = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers.authorization;

    console.log(authHeader);
    if (!authHeader) {
        return res.status(401).send(Helper.Response("failed", 401, "Authorization header missing", null));
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).send(Helper.Response("failed", 401, "Token missing", null));
    }

    try {
        const payload = verifyToken(token) as CustomJwtPayload;

        if (payload) {
            (req as any).user = payload;
            return next();
        } else {
            return res.status(401).send(Helper.Response("failed", 401, "Invalid token", null));
        }
    } catch (error) {
        return res.status(401).send(Helper.Response("failed", 401, "Authentication failed", null));
    }
};

export const authorizeRoles = (
    ...allowedRoles: string[]
) => {
    return async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        const userPayload = (req as any).user as CustomJwtPayload;

        try {
            const user = await User.findByPk(userPayload.id);

            if (!user) {
                return res.status(403).send(Helper.Response("failed", 403, "User not found", null));
            }

            console.log("User role:", user.role);
            console.log("Allowed roles:", allowedRoles);
            console.log("Role check result:", allowedRoles.includes(user.role));

            if (allowedRoles.includes(user.role)) {
                return next();
            } else {
                return res.status(403).send(Helper.Response("failed", 403, "Anda tidak memiliki akses", null));
            }
        } catch (error) {
            return res.status(500).send(Helper.Response("failed", 500, "Internal server error", null));
        }
    }
}