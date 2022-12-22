import { mongoose, Schema} from 'mongoose';

const teamSchema = new mongoose.Schema(
	{
		
		name: { type: String, required: true},
		status: { type: Boolean},
		score: { type: Number},
		category:[{type: Schema.Types.ObjectId, ref: 'event'}]
	},
	{   
		timestamps:true,
		versionKey: false,
	}
);
export const team = mongoose.model('team', teamSchema);
export default team;