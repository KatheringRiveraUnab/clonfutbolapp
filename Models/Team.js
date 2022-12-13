import mongoose, { Mongoose } from 'mongoose'
import {db} from '../mongodb.js'

const teamSchema = new mongoose.Schema(
    {
        id: { type: Number, required: true},
        Name: { type: String, required: true},
        state: { type: Boolean},
        Score: { type: Number}
    },
    {   
        timestamps:true,
        versionKey: false,
    }
);

export const Team = mongoose.model()