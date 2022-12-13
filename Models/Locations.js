import mongoose, { Mongoose } from 'mongoose'
import {db} from '../mongodb.js'

const locationsSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            require: true
        },
        description:{
            type: String,
            require: true,
            lowercase: true,
            unique: true
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

export const user= mongoose.model('users', userSchema);
export default user;