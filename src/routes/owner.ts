import express, { RequestHandler } from 'express';
import { authenticate, authorizeRoles } from '../middleware/middleware';
import { OwnerStoreBusiness } from '../controllers/owner/OwnerBusinessController';
import { OwnerUpdatePersonal } from '../controllers/owner/OwnerPersonalController';

const OwnerRoute = express.Router();

OwnerRoute.use(authenticate);

const Route = (method: 'get' | 'post' | 'patch' | 'delete', path: string, handler: RequestHandler) => {
    const fullPath = `/api/v1/owner/${path}`;
    OwnerRoute[method](fullPath, authorizeRoles('Pemilik Usaha'), handler);
};

Route('patch', 'business/store', OwnerStoreBusiness);
Route('patch', 'personal/update', OwnerUpdatePersonal);

export { OwnerRoute };