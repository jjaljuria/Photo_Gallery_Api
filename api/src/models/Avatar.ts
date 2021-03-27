import { timeStamp } from 'console';
import {Schema, model} from 'mongoose';

const avatarSchema = new Schema({
	url: {
		type: String,
		required: true
	},
	idUser: [{
		type: Schema.Types.ObjectId,
		ref: 'User'	
	}],
}, {timestamps: true});

export default model('Avatar', avatarSchema);