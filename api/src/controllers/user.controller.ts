import { RequestHandler } from "express";

export const login: RequestHandler = async (req, res) =>{
	res.send('login POST');
}