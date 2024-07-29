import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secret = process.env.JWT_TOKEN || "a03c71a6668fa9c8a3e44a00986cab1ae1c5c41441a26fec7dbf796a5ba3167b";

if (!secret) {
    throw new Error('JWT_TOKEN environment tidak terdefiniskan');
}

export interface CustomJwtPayload extends JwtPayload {
    id: number;
    role: string;
}

export const verifyToken = (token: string): CustomJwtPayload | null => {
    try {
        return jwt.verify(token, secret) as CustomJwtPayload;
    } catch (err) {
        return null;
    }
};

export const generateToken = (id: number, email: string, username: string, role: string): string => {
    const payload = {
        id,
        email,
        username,
        role,
    };
    return jwt.sign(payload, secret);
}
