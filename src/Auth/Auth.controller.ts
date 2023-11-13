import { Controller, Post } from "../Decorator/decorator.router";
import { Request, Response, NextFunction } from "express";
import { UserModel } from "../model/user.model";

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
}


