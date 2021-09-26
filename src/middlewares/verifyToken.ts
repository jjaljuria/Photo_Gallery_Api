import { RequestHandler, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';

export const verifyToken: RequestHandler = (req: any, res, next: NextFunction) => {

	const token = req.headers['x-access-token'];

	if (!token) return res.status(403).json({ message: 'not token provided' })

	try {
		const decoded: any = jwt.verify(token, config.SECRET);
		req.idUser = decoded.id;
	} catch (error) {
		return res.status(403).json({ message: 'token not valid' });
	}

	next();
}