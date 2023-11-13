import { NextFunction, Request, Response } from "express";
import { Controller, Get } from "../Decorator/decorator.router";
@Controller("/users")
export class HomeController{
    @Get("/")
    GetHomeInfo(req:Request , res:Response , next:NextFunction){
     try {
        res.send("users")
     } catch (error) {
        next(error)
     }
    }
}