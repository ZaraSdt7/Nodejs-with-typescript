import { Schema, model } from "mongoose";
import { Iuser } from "../Types/user.type";

const Userschema = new Schema<Iuser>({
fullname:{type:String,required:true , trim:true},
username:{type:String ,required:true , trim:true},
password:{type:String , required:true , trim:true},
mobile:{type:String},
accesstoken:{type:String}
},{
    timestamps:true
})
export const UserModel = model<Iuser>('user',Userschema)