import { validateSync } from "class-validator";
import { Iuser } from "../Types/user.type";
import { AuthRegisterDTO } from "./Auth.dto";
import { ErrorHandler, HashStringPassword } from "../modules/utils";
import createHttpError from "http-errors";
import { UserModel } from "../model/user.model";

export class AuthService{
async register(userDTO:AuthRegisterDTO):Promise<Iuser>{
const errors = validateSync(userDTO)
const Checkederror = ErrorHandler(errors)
if(Checkederror.length>0) throw new createHttpError.BadRequest("Validator error" + Checkederror)
const existuser = await UserModel.findOne({username:userDTO.username})
if(existuser) throw new createHttpError.BadRequest("Username already exists")
const newpass = HashStringPassword(userDTO.password)
userDTO.password = newpass
const user = await UserModel.create(userDTO)
return user    
}    
}