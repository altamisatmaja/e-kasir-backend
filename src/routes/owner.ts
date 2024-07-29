import express, { RequestHandler } from 'express';
import { authenticate, authorizeRoles } from '../middleware/middleware';
import { OwnerStoreBusiness } from '../controllers/owner/OwnerBusinessController';

const OwnerRoute = express.Router();

OwnerRoute.use(authenticate);

const Route = (method: 'get' | 'post' | 'patch' | 'delete', path: string, handler: RequestHandler) => {
    const fullPath = `/api/v1/owner/${path}`;
    OwnerRoute[method](fullPath, authorizeRoles('Pemilik Usaha'), handler);
};

Route('get', 'business/store', OwnerStoreBusiness);

export { OwnerRoute };