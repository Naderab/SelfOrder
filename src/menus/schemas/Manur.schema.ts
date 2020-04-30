/* eslint-disable @typescript-eslint/camelcase */
import * as mongoose from 'mongoose';

export const MenuSchema = new mongoose.Schema({
    service_availability:[ {
      
        time_periods: [{
            start_time: String,
            end_time: String,
        }],
        day_of_week: String,

    }],
    category_ids:{
        type: [String],
    },

    title: String
})