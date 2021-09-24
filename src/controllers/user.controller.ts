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

export const verifyLogin: any = (req: any, res: Response) => {
	const token = req.headers['x-access-token'];
	console.log(token);

	if (!token) return res.status(403).json({ message: 'not token provided' })

	jwt.verify(token, config.SECRET, async function (err: any, token: any) {

		if (err) return res.json({ loggedIn: false }).status(403);

		const user = await User.findById(token.id);
		return res.json({ loggedIn: true, user }).status(200);
	});

}

export const getAvatar: RequestHandler = async (req, res) => {
	const { username } = req.params;
	const avatar = await (await User.findOne({ username })).avatar;

	res.json(avatar);
}

export const updateAvatar: RequestHandler = async (req: any, res) => {
	const user = req.user?._id;
	const avatarUpdated = await User.findByIdAndUpdate(user?._id, { avatar: `${req.file.filename}` }, { new: true });
	res.json(avatarUpdated);
}

