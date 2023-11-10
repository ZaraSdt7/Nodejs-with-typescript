import { Controller, GET } from "../Decorators/decorator.router";
import { NextFunction, Request, Response } from 'express';

@Controller()
export   class HomeController{
    @GET('/users')
    GetHoeInfo(req:Request,res:Response , next:NextFunction){
        try {
        return res.send("users")    
        } catch (error) {
    
            next(error)
        }
    }
}