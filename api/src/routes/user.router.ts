import {Router} from 'express';
const router = Router();

import * as UserController from '../controllers/user.controller';

router.post('/login', UserController.login);

export default router;