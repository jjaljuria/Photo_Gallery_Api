import { RequestHandler } from "express";
import Photo from "../models/Photo";
import session from 'express';

declare global{
	namespace Express{
		interface User{
			_id: string;
		}
	}
}

export const getPhotos: RequestHandler = async (req, res) =>{
	console.log(req.session.user = 'hola');
	const photos = await Photo.find({idUser: req.user?._id});
	return res.json(req.user?._id);
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