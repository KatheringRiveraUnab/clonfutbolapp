import { team } from "../Models/Team";

//guardar un equipo en la base de datos
export const signTeam = (req, res) => {
    const nteam = team(req.body)
    nteam.save().then((data) => res.json(data)).catch((error) =>res.json({message: error}))
};

//Mostrar la informacion de los equipos
export const getTeam = (req, res) => {
    team.find().then((data) => res.json(data)).catch((error) =>res.json({message: error}));
};

//Mostrar un equipo por Id
export const getTeamById = (req, res) => {
    const {id} = req.params;
    team.findById(id).then((data) => res.json(data)).catch((error) => res.json({message: error}));
};

//Borrar un equipo
export const delTeam = (req, res) => {
    const {id} = req.params;
    team.deleteOne({_id: id }).then((data) => res.json(data)).catch((error) => res.json({message: error}));
};

//actualizar un equipo
export const upTeam = (req, res) => {
    const {id} = req.params;
    const {name, status, score} = req.body;
    team.updateOne({_id: id},
    {$set: {name, status, score}})
    .then((data) => res.json(data)).catch((error) => res.json({message: error}));

};
export default signTeam;