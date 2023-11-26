import { Document } from "mongoose";

export interface IBlog extends Document{
    title:string,
    text:string,
    author:string,
    image:string
}