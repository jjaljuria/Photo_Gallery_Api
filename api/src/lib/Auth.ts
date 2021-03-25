import {RequestHandler} from 'express';

export const isAuthenticated: RequestHandler = (req, res, next) =>{
	if(req.isAuthenticated()){
		return next();
	}

	return res.send('error de autenticacion')
}