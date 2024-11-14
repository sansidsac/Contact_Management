import dotenv from 'dotenv';
dotenv.config({path:'../.env'});

const mongoPassword = process.env.MDBPASS;

export const PORT = 3000;

export const MONGODBURL = `mongodb+srv://sanju123:${mongoPassword}@cluster0.r6i0g.mongodb.net/contact-collection?retryWrites=true&w=majority&appName=Cluster0`;