import config from '../config';

test('should to exist env vars', () => {
	expect(config.DEBUG).toBeTruthy();
	expect(config.MONGO_URI).not.toBeUndefined();
	expect(config.ROOT_USER).not.toBeUndefined();
	expect(config.ROOT_PASSWORD).not.toBeUndefined();
	expect(config.ROOT_EMAIL).not.toBeUndefined();
})