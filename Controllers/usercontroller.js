import {user} from '../Models/User.js'

//guardar un usuario en la base de datos
export const signuser = (req, res) => {
    const nuser = user(req.body)
    nuser.save().then((data) => res.json(data)).catch((error) =>res.json({message: error}))
};

//Mostrar la informacion de los usuarios
export const getUser = (req, res) => {
    user.find().then((data) => res.json(data)).catch((error) =>res.json({message: error}));
};

//Mostrar un usuario por Id
export const getUserById = (req, res) => {
    const {id} = req.params;
    user.findById(id).then((data) => res.json(data)).catch((error) => res.json({message: error}));
};

//Borrar un usuario
export const delUser = (req, res) => {
    const {id} = req.params;
    user.deleteOne({_id: id }).then((data) => res.json(data)).catch((error) => res.json({message: error}));
};

//actualizar un usuario
export const upUser = (req, res) => {
    const {id} = req.params;
    const {name, email, password} = req.body;
    user.updateOne({_id: id},
    {$set: {name, email, password}})
    .then((data) => res.json(data)).catch((error) => res.json({message: error}));

};
export default signuser;