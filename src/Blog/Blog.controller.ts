import { NextFunction, Request, Response } from "express";
import { Controller, Post } from "../Decorator/decorator.router";
import { BlogService } from "./Blog.service";
import { CreateBlogDTO } from "./Blog.dto";
import { plainToClass } from "class-transformer";
import { IBlog } from "../Types/blog.types";
import { StatusCodes } from "http-status-codes";
const blogservice:BlogService = new BlogService()
@Controller("/blog")
export class BlogController{
@Post()
    
async CreateBlog(req:Request , res:Response , next:NextFunction){
    try {
       const createblogdto:CreateBlogDTO = plainToClass(CreateBlogDTO,req.body)
       const blog :IBlog = await blogservice.CreateBlog(createblogdto)
       return res.status(StatusCodes.CREATED).json({
        statusCode:StatusCodes.CREATED,
        data:{
            blog
        }
       }) 
    } catch (error) {
        next(error)
    }
}

}