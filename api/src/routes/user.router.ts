import {Router} from 'express';
const router = Router();
import passport = require('passport');

import * as UserController from '../controllers/user.controller';

router.post('/login', UserController.login);

export default router;