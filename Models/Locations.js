import mongoose, { Mongoose } from 'mongoose'
import {db} from '../mongodb.js'

const locationsSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            require: true
        },
        address:{
            type: String,
            require: true
        }
    },
    {   
        timestamps:true,
        versionKey: false,
});

export const location = mongoose.model('location', locationSchema);
export default location;