import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JWT_TOKEN;

if (!secret) {
    throw new Error('JWT_TOKEN environment tidak terdefiniskan');
}

export interface CustomJwtPayload extends JwtPayload {
    id: string;
    roleId: string;
}

export const verifyToken = (token: string): CustomJwtPayload | null => {
    try {
        return jwt.verify(token, secret) as CustomJwtPayload;
    } catch (err) {
        return null;
    }
};
