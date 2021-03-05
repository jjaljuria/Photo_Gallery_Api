import { RequestHandler } from "express";

export const loginForm: RequestHandler = (req, res) =>{
	res.send('login GET');
}

export const login: RequestHandler = async (req, res) =>{
	res.send('login POST');
}