import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/project-nodejs-and-typescript").then(()=>
console.log("Connect to mongodb")).catch((err:any)=>console.log(err.message))