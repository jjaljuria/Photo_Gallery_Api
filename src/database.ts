import mongoose, {ConnectOptions} from 'mongoose';
import config from './config'; 
import Photo from './models/Photo';
import User from './models/User';

(async ()=>{
	const mongooseOptions: ConnectOptions = {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: true,
		// user: config.MONGO_USER,
		// pass: config.MONGO_PASSWORD
	}

	try{
		const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`, mongooseOptions);
		console.log('Database is connected to:', db.connection.name);
		// console.log(await User.create({
		// 	username: 'jjaljuria',
		// 	password: await User.encryptPassword('12345'),
		// 	email: 'josejavieral13@gmail.com',
		// }));

	}catch(error){
		console.error(error);  
	}
	
})();
