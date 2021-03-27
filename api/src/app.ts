import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config';
import session from 'express-session';
import passport from 'passport';
import multer from 'multer';
import uuid from 'uuid';
import path from 'path';

import photoRouter from './routes/photo.router';
import userRouter from './routes/user.router';

// Inicializations
const app = express();
import './config/passport';

// Settings
app.set('port', config.PORT);

declare module 'express-session'{
	interface SessionData{
		user: string;
	}
}

// Middlewares
app.use(morgan('dev'));
app.use(cors({
	origin: ['http://localhost:3000'],
	methods: ["GET", "POST", "PUT", "DELETE"],
	credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(session({
	secret: 'mysecretapp',
	resave: true,
	saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());
const storage = multer.diskStorage({
	destination: path.join(__dirname, 'public/img'),
	filename: (req, file, cb) =>{
		cb(null, uuid.v4() + path.extname(file.originalname).toLocaleLowerCase());
	}
});
const upload = multer({
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

// Routes
app.use(upload);
app.use('/photos', photoRouter);
app.use('/user', userRouter);


export default app;