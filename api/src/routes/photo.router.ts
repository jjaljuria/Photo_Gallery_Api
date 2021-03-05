import {Router} from 'express';
const router = Router();

router.get('/', (req, res)=>{
	res.send('Hola Mundo');
});

router.get('/:id', (req, res)=>{
	res.send(req.params.id);
});

router.post('/', (req, res)=>{
	res.send('photos Post')
});

router.delete('/:id', (req, res)=>{
	res.send('photos Delete id='+ req.params.id);
});

router.put('/', (req, res)=>{
	res.json(req.body);
});

export default router;