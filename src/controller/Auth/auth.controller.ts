import { NextFunction, Request, Response } from "express"
import { Controller, POST } from "../../Decorators/decorator.router"

@Controller('/auth')
export class AuthController{
    @POST()
    Registor(req:Request,res:Response , next:NextFunction){
        try {
        return res.send("users")    
        } catch (error) {
            next(error)
        }
    }
}
export default AuthController