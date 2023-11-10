import { NextFunction, Request, Response } from "express";
import { Controller, Get } from "../Decorator/decorator.router";
@Controller('/')
export class HomeController{
    @Get("users")
    GetHomeInfo(req:Request , res:Response , next:NextFunction){
     try {
        res.send("users")
     } catch (error) {
        next(error)
     }
    }
}