import { Controller, Post } from "../Decorator/decorator.router";
import { Request, Response, NextFunction } from "express";
import { UserModel } from "../model/user.model";
import { CompareHashPass, HashStringPassword, Jwtganaretor } from "../modules/utils";
import { Iuser } from "../Types/user.type";
import createHttpError from "http-errors";
import { finduser } from "../Types/type.method";

@Controller("/auth")
export class Authcontroller {
    @Post()
    register(req: Request, res: Response, next: NextFunction) {
        try {
            const { username, password, fullname } = req.body;
            const user = new UserModel({
                username, fullname, password
            });
            return  res.send(user);
        } catch (error) {
           return next(error);
        }
    }

    @Post()
      async  login(req: Request, res: Response, next: NextFunction) {
        try {
            const { username, password } = req.body;
            const existuser:finduser = await UserModel.findOne({username})
            if(!existuser) throw createHttpError.NotFound("Username  or password incorrect")
            const isPasswordValid:boolean = CompareHashPass(password,existuser.password)
           if(!isPasswordValid) throw createHttpError.NotFound("Username or password incorrect")
            await Jwtganaretor({username, id:existuser._id})
            const users = await UserModel.findById(existuser._id)
            return res.json({
                statusCode:200,
                data:{
                    users
                   
                }
            })
        } catch (error) {
            console.log(error);
          next(error);
        }
    }
}


