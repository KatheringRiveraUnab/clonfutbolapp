import { team } from '../Models/Team.js';
import { event } from '../Models/Event.js';
//guardar un equipo en la base de datos
export const signTeam = async (req, res) => {
	const {
		name,
		status,
		score = 0,
		eventId
	} = req.body;
	const events = await event.findOne(eventId);
	if (!name){
		return res.status(400).json({ error:'nombre de equipo requerido'});
	}
	const newTeam = new team({
		name,
		status,
		score,
		category: events._id
	});
	try{
		const savedTeam = await newTeam.save();
		events.teams = events.teams.concat(savedTeam._id);
		await events.save();
		res.json(savedTeam);
	}catch(err){
		res.json({err: 'Error'});
	}
		
		
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

