import { RequestHandler } from 'express';

export const isAuthenticated: RequestHandler = (req, res, next) =>{
	if(req.isAuthenticated()){
		return next();
	}
	return res.status(401).json('Unauthenticated');
}