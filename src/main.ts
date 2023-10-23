import express from "express";
import { Application,Request,Response,NextFunction } from "express";
import http,{ Server } from "http";
import { ResponseMethod } from "./types/type.public";
import Approuter from "./router/index.router";
import "./app.modules"
const app :Application = express();
const server:Server = http.createServer(app)
const PORT = 8000;
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(Approuter)
app.use((req:Request , res:Response , next:NextFunction)=>{
    const response :ResponseMethod ={
        StatusCode:404,
        message:"Page not found",

    }
    return res.status(404).json(response)
})
server.listen(PORT,()=>{
    console.log(`Server run over:http://localhost:${PORT}`);
})