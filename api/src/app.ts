import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config';
import session from 'express-session';
import passport from 'passport';

import photoRouter from './routes/photo.router';
import userRouter from './routes/user.router';

// Inicializations
const app = express();
import './config/passport';

// Settings
app.set('port', config.PORT);


// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(session({
	secret: 'mysecretapp',
	resave: true,
	saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/photos', photoRouter);
app.use('/user', userRouter);


export default app;