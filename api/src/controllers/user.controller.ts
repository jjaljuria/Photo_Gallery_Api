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
	const avatar = await (await User.findOne({username})).avatar;

	res.json(avatar);
}

export const updateAvatar: RequestHandler = async (req: any, res) =>{
	const user = req.user?._id;
	const avatarUpdated = await User.findByIdAndUpdate(user?._id, {avatar: `./${req.file.filename}`}, {new: true});
	res.json(avatarUpdated);
}

