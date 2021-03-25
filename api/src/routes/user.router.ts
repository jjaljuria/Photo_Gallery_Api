import {Router} from 'express';
const router = Router();
import passport from 'passport';

import * as UserController from '../controllers/user.controller';

router.post('/login', passport.authenticate('local') ,UserController.login);

export default router;