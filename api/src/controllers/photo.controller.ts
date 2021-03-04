import { RequestHandler } from "express";
import User from '../models/User';
export const getPhotos: RequestHandler = async (req, res) =>{
	const photos = await User
}