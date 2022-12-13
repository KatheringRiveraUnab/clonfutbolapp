import mongoose, { Mongoose } from 'mongoose'
import {db} from '../mongodb.js'

const teamSchema = new mongoose.Schema(
    {
        name: { type: String, required: true},
        state: { type: Boolean},
        Score: { type: Number}
    },
    {   
        timestamps:true,
        versionKey: false,
    }
);

export const Team = mongoose.model()