import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    email:String,
    username:String,
    password:String,
    salt:String
});