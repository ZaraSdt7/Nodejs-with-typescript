import { Controller, Post } from "../Decorator/decorator.router";
import { Request, Response, NextFunction } from "express";
@Controller('/')
export class Authcontroller{
    @Post('auth')
    register(req:Request,res:Response , next:NextFunction){
    try {
        const {username,password,age} = req.body;
         return res.status(200).send({
            username,password,age
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
    }
}