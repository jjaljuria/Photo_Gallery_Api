import {Router} from 'express';
const router = Router();
import {ensureToken} from '../lib/EnsureToken';

import * as PhotoController from '../controllers/photo.controller';

router.get('/', ensureToken , PhotoController.getPhotos);

router.get('/id/:id', PhotoController.getPhoto);

router.post('/', PhotoController.savePhoto);

router.delete('/:id', PhotoController.deletePhoto);

router.put('/', PhotoController.updatePhotos);

export default router;