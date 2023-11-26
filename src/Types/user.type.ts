import { Document } from "mongoose"
 export interface Iuser extends Document{
    fullname:string,
    username:string,
    password:string,
    email?:string,
    mobile?:string,
    accesstoken?:string
}
