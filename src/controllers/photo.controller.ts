import { RequestHandler } from "express";
import Photo from "../models/Photo";
import User from '../models/User';

declare global {
	namespace Express {
		interface User {
			_id: string;
		}
	}
}

export const getPhotos: RequestHandler = async (req, res) => {
	const { username } = req.params;
	const user = await User.findOne({ username });
	let photos = null;
	if (user !== null) {
		photos = await Photo.find({ idUser: user._id });
	}

	return res.json(photos);
}

export const getPhoto: RequestHandler = async (req, res) => {
	const { id } = req.params;
	const photo = await Photo.findById(id);
	return res.json(photo);
}

export const savePhoto: RequestHandler = async (req, res) => {
	const user = req.user?._id;
	const positionInitial = 1;

	const photoSaved = await Photo.create({
		idUser: user,
		url: `${req.file.filename}`,
		position: positionInitial
	});
	res.header('Access-Control-Allow-Origin', '*');
	res.json(photoSaved);
}

export const deletePhoto: RequestHandler = async (req, res) => {
	const checkedIds = req.body;
	checkedIds.forEach(async (id: string) => await Photo.findByIdAndDelete(id));
	res.json(checkedIds);
}

export const updatePhotos: RequestHandler = async (req, res) => {
	res.send('photo PUT');
}