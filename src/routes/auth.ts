import express, { RequestHandler } from 'express';
import { Logged, Login, Register } from '../controllers/AuthController';

const AuthRoute = express.Router();

const Route = (method: 'get' | 'post' | 'patch' | 'delete', path: string, handler: RequestHandler) => {
    const fullPath = `/api/v1/auth/${path}`;
    AuthRoute[method](fullPath, handler);
};

Route('post', 'login', Login);
Route('post', 'register', Register);


export { AuthRoute };