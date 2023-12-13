import mongoose from "mongoose";
const {Schema} = mongoose;

const timeSchema = new mongoose.Schema({
    start_time:{
        type: String
    },
    end_time:{
        type: String
    },
    busbar:{
        type: String
    }
});

export default mongoose.model('timeModel',timeSchema);