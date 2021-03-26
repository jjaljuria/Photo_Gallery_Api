export function ensureToken(req: any, res: any, next: Function){
	const bearerHeader = req.headers['authorization'];
	console.log(bearerHeader);
	if(typeof bearerHeader !== 'undefined'){
		const bearer = bearerHeader.split(" ");
		const bearerToken = bearer[1];
		req.token = bearerToken;
		next();
	}else{
		res.sendStatus(403);
	}
}