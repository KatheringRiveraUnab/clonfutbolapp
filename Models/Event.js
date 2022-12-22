import { mongoose, Schema } from 'mongoose';

const eventSchema = new mongoose.Schema(
	{
		name:{
			type: String,
			require: true
		},
		date:{
			type: Date,
			require: true,
		},
		teams:[{
			type: Schema.Types.ObjectId,
			ref: 'team'
		}]
	}

	,
	{   
		timestamps:true,
		versionKey: false,
	});

export const event = mongoose.model('event', eventSchema);
export default event;