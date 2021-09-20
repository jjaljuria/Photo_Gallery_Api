import User from '../models/User';

export const verifyExistRootUser = async (config: any) => {
	try {
		const user: typeof User = await User.findOne({ username: config.ROOT_USER });
		return user !== undefined && user !== null;
		console.log(user.name);
	} catch (err) {
		console.log(err);
	}

}

export const createRootUser = async (config: any) => {
	const user = await User.create({
		username: config.ROOT_USER,
		password: await User.encryptPassword(config.ROOT_PASSWORD || ''),
		email: config.ROOT_EMAIL,
	})

	return user !== null && user !== undefined;
}