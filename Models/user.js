import { mongoose } from 'mongoose';
import {Valid} from '../Validation/verifyEmail.js';
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
	const usuario = this;
	const salt = bcrypt.genSaltSync(12);
	const hash = bcrypt.hashSync(usuario.password, salt);
	usuario.password = hash;
	next();
});
userSchema.statics.login = login;

function login(email,password) {
	console.log('el correo es :',email);
	console.log('el password es :', password);
	if (!Valid(email)) { throw new Error('correo es invalido');}
				
	else {   return this.findOne({ email })
		.then( user => {
			console.log(user);
			if (!user) {
				throw new Error('El correo no corresponde');
					
			}
				
			console.log('El valor del password es:', password);
			const isMatch = bcrypt.compareSync(password, user.password);
			console.log('El valor de la comparación del password es:',isMatch);
			if (isMatch) {return true;}
			else{return false;}
									
		});
	}
}
export const user = mongoose.model('users', userSchema);
export default user;