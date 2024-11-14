import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    jobTitle:{
        type:String,
        required:true
    },
}, {
    timestamps: true
});

const contactModel = mongoose.model('Contacts', contactSchema);

export default contactModel;