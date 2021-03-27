import Avatar from '../models/Avatar';
import User from '../models/User';
import { RequestHandler } from 'express';

export const getAvatar: RequestHandler = async (req, res) =>{
	const {username} = req.params;

	const user = await User.find({username});
	const avatar = await Avatar.findOne({idUser: user._id});
	
	return res.json(avatar);
}

export const saveAvatar: RequestHandler = async (req, res) =>{

}