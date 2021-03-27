import {Schema, model, Model, Document} from 'mongoose';
import bcrypt from 'bcryptjs';
import IUser from '../lib/IUser';
import path from 'path';


export interface IUserModel extends Model<IUser>{
	_id: string;
	encryptPassword(password: string): string;
}

const userSchema = new Schema<IUser>({
	username: {
		type: String,
		required: true,
		maxlength: 50,
		unique: true
	},
	password: {
		type: String,
		required: true,
	},
	avatar: {
		type:String,
		default: path.join(__dirname, '../public/img/Avatar.jpg')
	},
	email: {
		type: String,
		unique:true,
		required: true
	},
	deleted: {
		type: Boolean,
		default: false
	}
},{
	timestamps: true,
});

userSchema.statics.encryptPassword = async (password) =>{
	const salt = await bcrypt.genSalt(10);
	const hash = bcrypt.hash(password, salt);
	return hash;
};

userSchema.methods.matchPassword = async function(password){
	return await bcrypt.compare(password, this.password);
}


export default model<IUser, IUserModel>('User', userSchema);