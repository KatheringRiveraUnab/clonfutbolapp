import express from 'express';
import {signLocation,  delLocation, getLocation, getLocationById, upLocation } from '../Controllers/locationcontroller.js';
import { signTeam, getTeam, getTeamById, upTeam, delTeam } from '../Controllers/teamcontroller.js';
import {signuser, getUser, getUserById, upUser, delUser} from '../Controllers/usercontroller.js';
import {createEvent, getEvent, delEvent, upEvent} from '../Controllers/eventController.js';
import {requireToken } from '../Middleware/auth.js';
import {login} from '../Controllers/loginController.js';

export const router = express.Router();

//Rutas usuarios
//Registrar un usuario
router.post('/user', signuser);
//mostrar los usuarios registrados
router.get('/user', getUser);
//Mostrar un usuario por id
router.get('/user/:id', getUserById);
//actualizar un usuario
router.put('/user/:id', upUser);
//Borrar un usuario
router.delete('/user/:id', delUser);

//Rutas Equipos
//Regristrar un Equipo
router.post('/team', signTeam);
//Mostrar todos los equipos
router.get('/team',getTeam);
//Mostrar un equipo por id
router.get('/team/:id', getTeamById);
//actualizar un equipo
router.put('/team/:id', upTeam);
//Borrar un equipo
router.delete('/user/:id', delTeam);

//Rutas Locaciones
//Regristrar una locacion
router.post('/location', signLocation);
//Mostrar todos los equipos
router.get('/locations',getLocation);
//Mostrar un equipo por id
router.get('/location/:id', getLocationById);
//actualizar un equipo
router.put('/location/:id', upLocation);
//Borrar un equipo
router.delete('/location/:id', delLocation);
export default router;

//Rutas Eventos
router.post('/event', createEvent);
router.get('/events', getEvent);
router.put('/events/:id', upEvent);
router.delete('/events/:id', delEvent);

//login
router.post('/login', login);