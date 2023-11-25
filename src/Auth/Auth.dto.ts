import { Expose } from "class-transformer";
import { IsDefined, Matches } from "class-validator";

export class AuthRegisterDTO{
@IsDefined()
@Expose()
@Matches(RegExp(/^[A-Za-z0-9\_\.]{5,10}$/))
username:string
@IsDefined()
@Expose()
fullname:string
@IsDefined()
@Expose()
password:string
}
