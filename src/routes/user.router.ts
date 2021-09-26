import { Router } from 'express';
const router = Router();
import passport from 'passport';
import { isAuthenticated } from '../middlewares/Autenticated';
import { upload } from '../middlewares/Upload';
import { verifyToken } from '../middlewares/verifyToken';
import * as UserController from '../controllers/user.controller';

router.post('/login', passport.authenticate('local'), UserController.login);

router.get('/login', verifyToken, UserController.verifyLogin);

router.get('/avatar/:username', UserController.getAvatar);

router.put('/avatar', isAuthenticated, upload, UserController.updateAvatar);

export default router;