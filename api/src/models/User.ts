import {Schema, model} from 'mongoose';

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		maxlength: 50,
		unique: true
	},
	password: {
		type: String,
		required: true,
		maxlength: 50
	},
	avatar: String,
	email: {
		type: String,
		unique:true,
		required: true
	}
},{
	timestamps: true
});

// userSchema.methods.encryptPassword = async (password) =>{
// 	const salt = await bcrypt.genSalt(10);
// 	const hash = bcrypt.hash(password, salt);
// 	return hash;
// };

// userSchema.methods.matchPassword = async function(password){
// 	return await bcrypt.compare(password, this.password);
// }


export default model('User', userSchema);