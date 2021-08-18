import { verifyExistRootUser, createRootUser } from './lib/utilities';

jest.mock('./models/User.ts');
import User from './models/User';

User.find.mockReturnValueOnce({ username: 'jose' }).mockReturnValueOnce(undefined);


describe('database connection', () => {
	it('verify if exist in databases root user', async () => {
		const result = await verifyExistRootUser()
		expect(result).toBeTruthy();

	});

	it('verify if not exist root user', async () => {
		const result = await verifyExistRootUser()
		expect(result).toBeFalsy();
	});
})