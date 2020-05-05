import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
    entities: [{
        types: String,
    }],
    title: String,
})