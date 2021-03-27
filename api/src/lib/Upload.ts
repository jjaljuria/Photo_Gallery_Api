import multer from 'multer';
import path from 'path';
const uuid = require('uuid');

const storage = multer.diskStorage({
	destination: path.join(__dirname, '../public/img'),
	filename: (req, file, cb) =>{
		cb(null, uuid.v4() + path.extname(file.originalname).toLocaleLowerCase());
	}
});
export const upload = multer({
	storage,
	dest: path.join(__dirname, 'public/img'),
	limits: {fileSize: 1000000},
	fileFilter: (req, file, cb: Function) =>{
		const filetypes: RegExp = /jpeg|jpg|png|gif/;
		const mimetype: boolean = filetypes.test(file.mimetype);
		const extname: boolean = filetypes.test(path.extname(file.originalname));
		if(mimetype && extname){
			return cb(null, true);
		}

		cb('Error: Archivo debe ser una imagen valida', false);
	}
}).single('image');