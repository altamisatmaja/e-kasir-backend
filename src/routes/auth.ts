import express, { RequestHandler } from 'express';
// import { authenticate, authorizeRoles } from '../middleware/middleware';
import { Logged, Login, Register } from '../controllers/AuthController';
import { authenticate, authorizeRoles } from '../middleware/middleware';

const AuthRoute = express.Router();

// AuthRoute.use(authenticate);
// AuthRoute.use(authorizeRoles('Pemilik Usaha'));

const Route = (method: 'get' | 'post' | 'patch' | 'delete', path: string, handler: RequestHandler) => {
    const fullPath = `/api/v1/auth/${path}`;
    AuthRoute[method](fullPath, handler);
};

Route('post', 'login', Login);
Route('post', 'register', Register);

const MiddlewareRoute = express.Router();
MiddlewareRoute.use(authenticate);
MiddlewareRoute.use(authorizeRoles('Admin', 'Pemilik Usaha', 'Pegawai'));

const MiddleRoute = (method: 'get' | 'post' | 'patch' | 'delete', path: string, handler: RequestHandler) => {
    const fullPath = `/api/v1/auth/${path}`;
    MiddlewareRoute[method](fullPath, handler);
};

MiddleRoute('get', 'logged', Logged);

export { AuthRoute, MiddlewareRoute };