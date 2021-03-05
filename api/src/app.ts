import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config';
// import bcrypt from 'bcryptjs';
// import session from 'express-session';

import photoRouter from './routes/photo.router';

const app = express();

app.set('port', config.PORT);

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/photo', photoRouter);
// app.get('/', async (req, res)=>{
// 	const salt = await bcrypt.genSalt(10);
// 	const hash = bcrypt.hash('hola mundo', salt);
// 	res.send(hash);
// })

export default app;