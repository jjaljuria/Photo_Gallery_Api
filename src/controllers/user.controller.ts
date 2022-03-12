import { Response, RequestHandler } from 'express';
import User from '../models/User';
import jwt from 'jsonwebtoken';
import config from '../config';

export const login: any = (req: any, res: Response) => {
	const token = jwt.sign({ id: req.user._id }, config.SECRET, {
		expiresIn: 68400 * 14
	});
	res.json({ token });
}

export const verifyLogin: any = async (req: any, res: Response) => {

	const user = await User.findById(req.idUser);
	return res.json({ loggedIn: true, user }).status(200);
}

export const getAvatar: RequestHandler = async (req, res) => {
	const { username } = req.params;
	const user = await User.findOne({ username });
	if (user) {
		const avatar = await user.avatar;
		res.json(avatar);
	}

	res.status(404);
}

export const updateAvatar: RequestHandler = async (req: any, res) => {
	const user = req.user?._id;
	const avatarUpdated = await User.findByIdAndUpdate(user?._id, { avatar: `${req.file.filename}` }, { new: true });
	res.json(avatarUpdated);
}

