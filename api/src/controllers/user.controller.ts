import { RequestHandler } from "express";

export const login: RequestHandler = async (req, res) =>{
	console.log(req.user);
	res.send('login POST');
}