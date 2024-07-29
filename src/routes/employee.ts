import express, { RequestHandler } from 'express';
import { authenticate, authorizeRoles } from '../middleware/middleware';

const EmployeeRoute = express.Router();

EmployeeRoute.use(authenticate);
EmployeeRoute.use(authorizeRoles('Pemilik Usaha'));

const Route = (method: 'get' | 'post' | 'patch' | 'delete', path: string, handler: RequestHandler) => {
    const fullPath = `/api/v1/${path}`;
    EmployeeRoute[method](fullPath, handler);
};

// Route('get', '/karyawan', (req, res) => {
//     res.send('Hanya admin');
// });


export { EmployeeRoute };