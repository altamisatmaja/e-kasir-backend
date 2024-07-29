import express, { RequestHandler } from 'express';
import { Logged, Login, Register } from '../controllers/AuthController';
import { authenticate, authorizeRoles } from '../middleware/middleware';

const MiddlewareRoute = express.Router();
MiddlewareRoute.use(authenticate);
MiddlewareRoute.use(authorizeRoles('Admin', 'Pemilik Usaha', 'Pegawai'));

const MiddleRoute = (method: 'get' | 'post' | 'patch' | 'delete', path: string, handler: RequestHandler) => {
    const fullPath = `/api/v1/auth/${path}`;
    MiddlewareRoute[method](fullPath, handler);
};

MiddleRoute('get', 'logged', Logged);

export { MiddlewareRoute };