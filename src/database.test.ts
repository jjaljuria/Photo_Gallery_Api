import { verifyExistRootUser, createRootUser } from './lib/utilities';
import config from './config';
import bcrypt from 'bcryptjs';

jest.mock('./models/User.ts');
import User from './models/User';

User.find.mockReturnValueOnce({ username: 'jose' }).mockReturnValueOnce(undefined);
User.encryptPassword.mockImplementation((password: string) => bcrypt.hashSync(password));
User.create.mockImplementationOnce(data => data);

describe('database connection', () => {
	it('verify if exist in databases root user', async () => {
		const result = await verifyExistRootUser(config);
		expect(result).toBeTruthy();

	});

	it('verify if not exist root user', async () => {
		const result = await verifyExistRootUser(config);
		expect(result).toBeFalsy();
	});

	it('verify createRootUser', async () => {
		const data: Object = {
			username: config.ROOT_USER,
			password: await User.encryptPassword(config.ROOT_PASSWORD || ''),
			email: config.ROOT_EMAIL,
		}
		const user = await createRootUser(config);
		expect(user).toBeTruthy;
	})
})