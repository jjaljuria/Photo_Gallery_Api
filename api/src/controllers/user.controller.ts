import { Response, RequestHandler } from 'express';
import User from '../models/User';

export const login: any = (req: any, res: Response) =>{
	req.session.user = req.user;
	res.json(req.session.user);
}

export const verifyLogin: any = (req: any, res: Response) =>{
	if(req.session.user){
		res.json({loggedIn: true, user: req.session.user});
	}else{
		res.json({loggedIn: false});
	}
}

export const getAvatar: RequestHandler = async (req, res) =>{
	const { username } = req.params;

	return await (await User.findOne({username})).avatar;
}

