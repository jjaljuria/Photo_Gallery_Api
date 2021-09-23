import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config';
import session from 'express-session';
import passport from 'passport';
import path from 'path';
import MongoStore from 'connect-mongo';
import photoRouter from './routes/photo.router';
import userRouter from './routes/user.router';


// Inicializations
const app = express();
import './config/passport';

// Settings
app.set('port', config.PORT);

declare module 'express-session' {
	interface SessionData {
		user: string;
	}
}

// Middlewares
app.use(morgan('dev'));
app.use(cors({
	origin: [config.CORS_ORIGIN],
	methods: ["GET", "POST", "PUT", "DELETE"],
	credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('trust proxy', 1);
app.use(session({
	secret: 'mysecretapp',
	resave: true,
	saveUninitialized: true,
	cookie: {
		maxAge: 1000 * 60 * 60 * 24 * 7
	},
	store: MongoStore.create({
		mongoUrl: `${!config.DEBUG ? config.MONGO_URI : config.MONGO_LOCALHOST + '/' + config.MONGO_DATABASE}`,
		mongoOptions: {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		},
		dbName: 'photo_gallery',
		collectionName: 'sessions',
	})
}));

app.use(passport.initialize());
app.use(passport.session());


// Routes
app.use('/photos', photoRouter);
app.use('/user', userRouter);

// Statics
app.use(express.static(path.join(__dirname, 'public/img')));


export default app;