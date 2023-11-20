import express from "express"
import http, { Server } from "http"
import { Application,NextFunction,Request,Response } from "express";
import { ResponseMethods } from "./Types/type.method";
import APProuter from "./Router/index.routes";
import "./app.modules"
import "./modules/mongoDB.connect"

const app :Application = express()
const server :Server = http.createServer(app)
const PORT=5600;
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(APProuter)
app.use((req:Request,res:Response,next:NextFunction)=>{
const Responses : ResponseMethods={
    StatusCode:404,
    message:"Page not found"
}
return res.status(404).json(Responses)
})
app.use((error:any , req:Request , res:Response , next:NextFunction)=>{
const StatusCode :number = +error?.status || 500;
const message:string = error?.message || "Internal server error";
const response:ResponseMethods = {
StatusCode,
message,
errors:error?.erros || []

}
return res.status(StatusCode).json(response)
})

server.listen(PORT,()=>{
    console.log(`Server runing on:http://localhost:${PORT}`);
})