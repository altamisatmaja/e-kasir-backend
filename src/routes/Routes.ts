import express from 'express';
import { authenticate, authorizeRoles } from '../middleware/middleware';

const router = express.Router();

// router.get("/role", RoleController.GetRole);
// router.post("/role", RoleController.CreateRole);
// router.patch("/role/:id", RoleController.UpdateRole);
// router.delete("/role/:id", RoleController.DeleteRole);


export default router;