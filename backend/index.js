import express from 'express';
import { PORT, MONGODBURL } from './config.js';
import mongoose from 'mongoose';
import contactRoute from './route/contactRoute.js';

const app=express();

app.use(express.json());

app.use('/contacts',contactRoute);

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