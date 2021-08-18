import dotenv from 'dotenv'
dotenv.config();

console.log(process.env.HELLO);

export default {
	MONGO_DATABASE: process.env.MONGO_DATABASE || 'photo_gallery',
	PORT: process.env.PORT || '4000',
	MONGO_LOCALHOST: process.env.MONGO_LOCALHOST || 'mongodb://localhost',
	MONGO_URI: process.env.MONGO_URI,
	DEBUG: process.env.DEBUG === 'true',
	ROOT_USER: process.env.ROOT_USER,
	ROOT_PASSWORD: process.env.ROOT_PASSWORD,
	ROOT_EMAIL: process.env.ROOT_EMAIL,
}