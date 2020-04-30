import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
    entities: [{
        Entity:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Entity"
        }
    }],
    
    title: String,
})