import { RequestHandler } from "express";
import User from '../models/User';
import Photo from "../models/Photo";


export const getPhotos: RequestHandler = async (req, res) =>{
	const {username} = req.params;
	const user = await User.findOne({username: username});
	const photos = await Photo.find({idUser: user._id});
	return res.json(photos);
}

export const getPhoto: RequestHandler = async (req, res) =>{
	const {id} = req.params;
	const photo = await Photo.findById(id);
	return res.json(photo);
}

export const savePhoto: RequestHandler = async (req, res) =>{
	res.send('photo POST');
}

export const deletePhoto: RequestHandler = async (req, res) =>{
	res.send('photo DELETE');
}

export const updatePhotos: RequestHandler = async (req, res) =>{
	res.send('photo PUT');
}