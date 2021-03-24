import {Router} from 'express';
const router = Router();
import passport = require('passport');

import * as UserController from '../controllers/user.controller';

router.post('/login', passport.authenticate('local',{
	successRedirect: '/photos'
}) , UserController.login);

export default router;