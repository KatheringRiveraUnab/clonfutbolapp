import location from "../Models/Locations.js";

//guardar una ubicacion en la base de datos
export const signLocation = (req, res) => {
    const nLocation = location(req.body)
    nLocation.save().then((data) => res.json(data)).catch((error) =>res.json({message: error}))
};

//Mostrar la informacion de las ubicaciones
export const getLocation = (req, res) => {
    location.find().then((data) => res.json(data)).catch((error) =>res.json({message: error}));
};

//Mostrar una ubicacion por Id
export const getLocationById = (req, res) => {
    const {id} = req.params;
    location.findById(id).then((data) => res.json(data)).catch((error) => res.json({message: error}));
};

//Borrar una ubicacion
export const delLocation = (req, res) => {
    const {id} = req.params;
    location.deleteOne({_id: id }).then((data) => res.json(data)).catch((error) => res.json({message: error}));
};

//actualizar una ubicacion
export const upLocation = (req, res) => {
    const {id} = req.params;
    const {name, address} = req.body;
    location.updateOne({_id: id},
    {$set: {name, address}})
    .then((data) => res.json(data)).catch((error) => res.json({message: error}));

};
export default signLocation;