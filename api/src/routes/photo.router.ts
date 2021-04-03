import {Router} from 'express';
const router = Router();
import { isAuthenticated } from '../lib/Autenticated';
import { upload } from '../lib/Upload';

import * as PhotoController from '../controllers/photo.controller';

router.get('/:username', PhotoController.getPhotos);

router.get('/id/:id', PhotoController.getPhoto);

router.post('/', isAuthenticated , upload ,PhotoController.savePhoto);

router.delete('/', PhotoController.deletePhoto);

router.put('/', PhotoController.updatePhotos);

export default router;