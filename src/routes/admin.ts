import express, { RequestHandler } from 'express';
import { authenticate, authorizeRoles } from '../middleware/middleware';
import { ListOfBusinessCategory, StoreBusinessCategory, UpdateBusinessCategory } from '../controllers/BusinessCategoriesController';

const AdminRoute = express.Router();
AdminRoute.use(authenticate);
AdminRoute.use(authorizeRoles('Admin'));

const Route = (method: 'get' | 'post' | 'patch' | 'delete', path: string, handler: RequestHandler) => {
    const fullPath = `/api/v1/${path}`;
    AdminRoute[method](fullPath, handler);
};

Route('get', 'business-categories', ListOfBusinessCategory);
Route('post', 'business-categories/store', StoreBusinessCategory);
Route('patch', 'business-categories/update/:id', UpdateBusinessCategory);

export { AdminRoute };