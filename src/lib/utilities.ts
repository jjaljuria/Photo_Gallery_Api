import config from '../config';
import User from '../models/User';

export const verifyExistRootUser = async (): boolean => {
	try {
		const user: User = await User.find({ username: config.ROOT_USER });
		return user !== undefined;
	} catch (err) {
		console.log(err);
	}

}

export const createRootUser = () => {

}