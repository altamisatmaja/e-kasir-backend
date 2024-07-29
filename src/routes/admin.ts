import express, { RequestHandler } from 'express';
import { authenticate, authorizeRoles } from '../middleware/middleware';
import { StoreBusinessCategory } from '../controllers/BusinessCategoriesController';

const AdminRoute = express.Router();
AdminRoute.use(authenticate);
AdminRoute.use(authorizeRoles('Admin'));

const AdminRoutes = (method: 'get' | 'post' | 'patch' | 'delete', path: string, handler: RequestHandler) => {
    const fullPath = `/api/v1/${path}`;
    AdminRoute[method](fullPath, handler);
};

AdminRoutes('post', 'business-categories/store', StoreBusinessCategory);

export { AdminRoute };