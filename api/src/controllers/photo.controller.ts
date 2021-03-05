import { RequestHandler } from "express";
import User from '../models/User';


export const getPhotos: RequestHandler = async (req, res) =>{
	res.send('photos GET');
}

export const getPhoto: RequestHandler = async (req, res) =>{
	res.send('photo GET');
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