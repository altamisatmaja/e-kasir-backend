import express, { RequestHandler } from 'express';
import { authenticate, authorizeRoles } from '../middleware/middleware';

const OwnerRoute = express.Router();

OwnerRoute.use(authenticate);
OwnerRoute.use(authorizeRoles('Pemilik Usaha'));

const Route = (method: 'get' | 'post' | 'patch' | 'delete', path: string, handler: RequestHandler) => {
    const fullPath = `/v1${path}`;
    OwnerRoute[method](fullPath, handler);
};

Route('get', '/karyawan', (req, res) => {
    res.send('Hanya admin');
});