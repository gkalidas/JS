import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstName:{
        type:String,
        required:'enter a first Name'
    },
    lastName:{
        type:String,
        required:'enter a last Name'
    },
    email:{
        type:String
    },
    company:{
        type: String
    },
    phone:{
        type:Number
    },
    created_date:{
        type: Date,
        //will create date automatically if we don't send it
        default:Date.now
    }
});