import {Schema, model} from 'mongoose';

const photoSchema = new Schema({
	idUser: [{
		type: Schema.Types.ObjectId,
		ref: 'User'	
	}],
	url: {
		type: String,
		uniqued: true,
		required: true,
	},
	position: {
		type: Number,
		default: 0
	}
});

export default model('Photo', photoSchema);