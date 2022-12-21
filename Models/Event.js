import { mongoose } from 'mongoose'
import {db} from '../mongodb.js'
import team from './Team.js';

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

        team1:{type: mongoose.Schema.Types.ObjectId, ref: 'team'},
        
        team2:{type: Schema.Types.ObjectId, ref: 'team'}
    }

    ,
    {   
        timestamps:true,
        versionKey: false,
});

export const event = mongoose.model('event', eventSchema);
export default event;