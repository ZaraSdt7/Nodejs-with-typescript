import { Controller, GET } from "../Decorators/decorator.router";
import { NextFunction, Request, Response } from 'express';

@Controller('/user')
export   class HomeController{
    @GET()
    GetHoeInfo(req:Request,res:Response , next:NextFunction){
        try {
        return res.status(200).send("user")    
        } catch (error) {
    
            next(error)
        }
    }
}