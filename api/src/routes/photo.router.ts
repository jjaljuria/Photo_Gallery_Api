import {Router} from 'express';
const router = Router();

import * as PhotoController from '../controllers/photo.controller';

router.get('/', PhotoController.getPhotos);

router.get('/:id', PhotoController.getPhoto);

router.post('/', PhotoController.savePhoto);

router.delete('/:id', PhotoController.deletePhoto);

router.put('/', PhotoController.updatePhotos);

export default router;