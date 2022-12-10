import {user} from '../Models/user.js'

//guardar un usuario en la base de datos
export const signuser = (req, res) => {
    const nuser = user(req.body)
    nuser.save().then((data) => res.json(data)).catch((error) =>res.json({message: error}))
};

export default signuser;