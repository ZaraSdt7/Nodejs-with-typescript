import { ObjectId } from "mongodb";

 export interface Iuser{
    fullname:string,
    username:string,
    password:string,
    email?:string,
    mobile?:string,
    accesstoken?:string
}
