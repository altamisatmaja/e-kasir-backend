import express, { Request, Response, NextFunction } from 'express';
import { authenticate, authorizeRoles } from '../middleware/middleware';
import AuthRoute from './auth';

const router = express.Router();

router.get('/', ((res: Response) => {
    return res.json(
        'eKasir - API V1'
    );
}));

router.use(AuthRoute);

export default router;