import express from "express"
import http, { Server } from "http"
import { Application,NextFunction,Request,Response } from "express";
import { ResponseMethods } from "./Types/type.method";

const app :Application = express()
const server :Server = http.createServer(app)
const PORT=5600;
app.use((req:Request,res:Response,next:NextFunction)=>{
const Responses : ResponseMethods={
    StatusCode:404,
    message:"Page not found"
}
return res.status(404).json(Responses)
})
server.listen(PORT,()=>{
    console.log(`Server runing on:http://localhost:${PORT}`);
})