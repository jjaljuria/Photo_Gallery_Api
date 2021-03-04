import mongoose, {ConnectOptions} from 'mongoose';
import config from './config'; 
import Photo from './models/Photo';
import User from './models/User';

(async ()=>{
	const mongooseOptions: ConnectOptions = {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		// user: config.MONGO_USER,
		// pass: config.MONGO_PASSWORD
	}

	try{
		const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`, mongooseOptions);
		console.log('Database is connected to:', db.connection.name);
	}catch(error){
		console.error(error);  
	}
	
})();
