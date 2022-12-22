import {user} from '../Models/User.js';
import {generateToken} from '../config/jwtfunciones.js';
import dotenv from 'dotenv';
dotenv.config();
//import jwt from 'jsonwebtoken';

export const login = async (req,res) => {
	try {
		const { email, password } = req.body;

		let usuario = await user.findOne({ email });
		if (!usuario)
			return res.status(403).json({ error: 'No existe este correo' });
		const respuestaPassword = await  user.login(email, password);
		//const respuestaPassword = await user.comparePassword(password);
		if (respuestaPassword){
			//aca generamos nuestro token JWT
			const token = generateToken(user._id);
			return res.json({ token });

			//aca configuramos el token en una cookie
			//res.cookie("token", token);
			//return res.status(200).json({message: "usuario y contraseña correcta" });
			// Generar el token JWT
       
			// generateRefreshToken(user.id, res);

			//     return res.json({ token, expiresIn });
		} else {
			return res.status(403).json({message: 'usuario y contraseña incorrecta' }); 
		}
       
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error: 'Error de servidor' });
	}

};

export default login; 