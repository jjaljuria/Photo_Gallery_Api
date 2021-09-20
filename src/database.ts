import mongoose, { ConnectOptions } from 'mongoose';
import config from './config';
import { createRootUser, verifyExistRootUser } from './lib/utilities';
import User from './models/User';

(async () => {
	const mongooseOptions: ConnectOptions = {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: true,
	}

	try {
		const db = await mongoose.connect(`${!config.DEBUG ? config.MONGO_URI : config.MONGO_LOCALHOST + '/' + config.MONGO_DATABASE}`, mongooseOptions);
		console.log('Database is connected to:', db.connection.name);
		if (!verifyExistRootUser(config)) {
			console.log('not exit root user', config);
			createRootUser(config);
		}
		const user: typeof User = await User.findOne({ username: config.ROOT_USER });
		console.log(user);

	} catch (error) {
		console.error(error);
	}

})();


