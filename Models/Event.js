import { mongoose } from 'mongoose';
import {db} from '../mongodb.js';

const eventSchema = new mongoose.Schema(
	{
		_id: {Type: mongoose.Schema.Types.ObjectId},

		name:{
			type: String,
			require: true
		},
		date:{
			type: Date,
			require: true,
		},
	}

	,
	{   
		timestamps:true,
		versionKey: false,
	});

export const event = mongoose.model('event', eventSchema);
export default event;