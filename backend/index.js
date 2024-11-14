import express from 'express';
import { PORT, MONGODBURL } from './config.js';
import mongoose from 'mongoose';

const app=express();

mongoose.connect(MONGODBURL)
.then(()=>{
    console.log('Connected to MongoDB');
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    })
})
.catch((e)=>{
    console.log(e);
})