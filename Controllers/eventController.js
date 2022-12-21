import { event } from '../Models/Event.js';
export const createEvent= (req, res) => {
	const nEvent = event(req.body);
	nEvent.save().then((data) => res.json(data)).catch((error) =>res.json({message: error}));
};

//Mostrar la informacion de los eventos
export const getEvent = (req, res) => {
	event.find().then((data) => res.json(data)).catch((error) =>res.json({message: error}));
};

//Mostrar una evento por name 
export const getEventByName = (req, res) => {
	const {name} = req.params;
	event.findOne(name).then((data) => res.json(data)).catch((error) => res.json({message: error}));
};

//Borrar un Evento
export const delEvent = (req, res) => {
	const {id} = req.params;
	event.deleteOne({_id: id }).then((data) => res.json(data)).catch((error) => res.json({message: error}));
};

//actualizar una ubicacion

export const upEvent = (req, res) => {
	const {id} = req.params;
	const {name, date} = req.body;
	event.updateOne({_id: id},
		{$set: {name, date}})
		.then((data) => res.json(data)).catch((error) => res.json({message: error}));

};
export default createEvent;