import express, { urlencoded } from "express";
import { Application,Request,Response,NextFunction } from "express";
import http,{ Server } from "http";
import { ResponseMethod } from "./types/type.public";


const app :Application = express();
const server:Server = http.createServer(app)
const PORT = 5600;
app.use(express.json())
app.use(express.urlencoded({extended:true}))

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