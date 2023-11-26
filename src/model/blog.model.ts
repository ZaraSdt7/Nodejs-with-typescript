import { Schema, model } from "mongoose";
import { IBlog } from "../Types/blog.types";

const Blogschema = new Schema<IBlog>({
title:{type:String,required:true , trim:true},
text:{type:String ,required:true , trim:true},
author:{type:String , required:true , trim:true},
image:{type:String},
},{
    timestamps:true
})
export const BlogModel = model<IBlog>('blog',Blogschema)