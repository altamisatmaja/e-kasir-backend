import express, { Request, Response, NextFunction } from 'express';
import { authenticate, authorizeRoles } from '../middleware/middleware';
import { AuthRoute } from './auth';
import { AdminRoute } from './admin';
import { OwnerRoute } from './owner';
import { EmployeeRoute } from './employee';
import { MiddlewareRoute } from './middleware';

const router = express.Router();

router.get('/', ((res: Response) => {
    return res.json(
        'eKasir - API V1'
    );
}));

router.use(AuthRoute);

router.use(authenticate);
router.use('/admin', authorizeRoles('Admin'), AdminRoute);
router.use('/owner', authorizeRoles('Pemilik Usaha'), OwnerRoute);
router.use('/employee', authorizeRoles('Pegawai'), EmployeeRoute);

// router.use(AuthRoute);
// router.use(MiddlewareRoute);
// router.use(AdminRoute);

router.use(MiddlewareRoute);

export default router;