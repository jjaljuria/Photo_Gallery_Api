import { Document } from 'mongoose';

export default interface IUser extends Document{
	_id: string;
	password: string;
	username: string;
	email: string;
	deleted: boolean;
	encryptPassword(): string;
}