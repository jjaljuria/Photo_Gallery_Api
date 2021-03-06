import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config';
import session from 'express-session';
import passport from 'passport';
import path from 'path';
import MongoStore from 'connect-mongodb-session';
import photoRouter from './routes/photo.router';
import userRouter from './routes/user.router';

const MongoDBStore = MongoStore(session);
const store = new MongoDBStore({
	uri: `${!config.DEBUG ? config.MONGO_URI : config.MONGO_LOCALHOST}`,
	collection: 'sessions',
	databaseName: 'photo_gallery',
	expires: 1000 * 60 * 60 * 24 * 14,
});

store.on('error', function (error) {
	console.log(error)
})

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
	methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
	credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
	secret: 'mysecretapp',
	resave: true,
	saveUninitialized: true,
	store,
	cookie: {
		sameSite: true,
		maxAge: 1000 * 60 * 60 * 24 * 14
	}
}));

app.use(passport.initialize());
app.use(passport.session());


// Routes
app.use('/photos', photoRouter);
app.use('/user', userRouter);

// Statics
app.use(express.static(path.join(__dirname, 'public/img')));


export default app;