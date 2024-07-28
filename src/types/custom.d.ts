import { JwtPayload } from 'jsonwebtoken';
import { UserInstance } from '../database/models/User';
import { Request } from 'express';

declare global {
    namespace Express {
        interface Request {
            user?: UserInstance
        }
    }
}