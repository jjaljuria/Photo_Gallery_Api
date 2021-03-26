import { Response } from 'express';

export const login: any = async (req: any, res: Response) =>{
	req.session.user = req.user;
	res.json(req.session.user);
}

