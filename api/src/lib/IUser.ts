import { Document } from 'mongoose';

export default interface IUser extends Document{
	password: string;
	username: string;
	email: string;
	deleted: boolean;
	encryptPassword(): string;
}