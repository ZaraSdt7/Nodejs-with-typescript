import { Controller, GET } from "../Decorators/decorator.router";
import { NextFunction, Request, Response } from 'express';

@Controller("/users")
export   class HomeController{
    @GET()
    GetHoeInfo(req:Request,res:Response , next:NextFunction){
        try {
        return res.send("users")    
        } catch (error) {
    
            next(error)
        }
    }
}