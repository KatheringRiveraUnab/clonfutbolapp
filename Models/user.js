import { mongoose } from 'mongoose';
import {db} from '../mongodb.js';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema(
	{
		name:{
			type: String,
			require: true
		},
		email:{
			type: String,
			require: true,
			lowercase: true,
			unique: true
		},
		password:{
			type: String,
			require: true
		},
		emailVerified:{
			type: Boolean,
			default: false
		}

	},
	{   
		timestamps:true,
		versionKey: false,
	});
userSchema.pre('save', function(next){
	const user = this;
	const salt = bcrypt.genSaltSync(12);
	const hash = bcrypt.hashSync(user.password, salt);
	user.password = hash;
	next();
});
export const user = mongoose.model('users', userSchema);
export default user;