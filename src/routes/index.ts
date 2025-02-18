import { Router } from "express";
import authRouter from './auth.route';
import fileRouter from './file.route'

const router = Router();
router.use('/file',fileRouter)
router.use(authRouter);

export default router;