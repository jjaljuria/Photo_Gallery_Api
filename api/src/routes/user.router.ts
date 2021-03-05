import {Router} from 'express';
const router = Router();

router.get('/login', (req, res)=>{
	res.send('Login GET');
});

router.post('/login', (req, res)=>{
	res.send('Login POST');
});

export default router;