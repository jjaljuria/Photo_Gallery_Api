import { RequestHandler } from "express";
import User from '../models/User';
import bcryptjs from 'bcryptjs';


export const getPhotos: RequestHandler = async (req, res) =>{
	const photos = await User
}