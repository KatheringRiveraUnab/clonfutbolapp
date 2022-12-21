import { mongoose} from 'mongoose';
import {db} from '../mongodb.js';

const teamSchema = new mongoose.Schema(
	{
		
		name: { type: String, required: true},
		status: { type: Boolean},
		score: { type: Number},
		gol:{ type: Number}
	},
	{   
		timestamps:true,
		versionKey: false,
	}
);
export const team = mongoose.model('team', teamSchema);
export default team;