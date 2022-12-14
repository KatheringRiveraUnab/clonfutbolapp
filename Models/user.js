import mongoose, { Mongoose } from 'mongoose'
import {db} from '../mongodb.js'

const userSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            require: true
        },
        email:{
            type: String,
            require: true,
            lowercase: true,
            unique: true
        },
        password:{
            type: String,
            require: true
        },
        emailVerified:{
            type: Boolean,
            default: false
        }

    },
    {   
        timestamps:true,
        versionKey: false,
});

export const user = mongoose.model('users', userSchema);
export default user;