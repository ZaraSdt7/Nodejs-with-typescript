import { NextFunction, Request, Response } from "express";
import { Controller, Delete, Get, Post } from "../Decorator/decorator.router";
import { BlogService } from "./Blog.service";
import { CreateBlogDTO, BlogIDDTO } from './Blog.dto';
import { plainToClass } from "class-transformer";
import { IBlog } from "../Types/blog.types";
import { StatusCodes } from "http-status-codes";
import { FindDoc } from "../Types/type.method";
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
@Get()
async GetAllBlog(req:Request , res:Response , next:NextFunction){
    try {
      const fetchall:IBlog[] =await blogservice.FetchAll()
      return res.status(StatusCodes.OK).json({
        statusCode:StatusCodes.OK,
        data:{
            fetchall
        }
      })  
    } catch (error) {
        next(error)
    }
}

@Get("/find/:id")
async GetBlogID(req:Request , res:Response , next:NextFunction){
    try {
       const getid:BlogIDDTO = plainToClass(BlogIDDTO,req.params) 
       const fetchid:FindDoc<IBlog> = await blogservice.FetchById(getid)
       return res.status(StatusCodes.OK).json({
        statusCode:StatusCodes.OK,
        data:{
            fetchid
        }
       })
    } catch (error) {
        next(error)
    }
}
@Delete("/delete/:id")
async RemovelogID(req:Request , res:Response , next:NextFunction){
    try {
      const fetchids:BlogIDDTO = plainToClass(BlogIDDTO,req.params)
      const resultdel:string= await blogservice.DeleteByID(fetchids)
      return res.status(StatusCodes.OK).json({
        statusCode:StatusCodes.OK,
        data:{
            resultdel
        }
      })  
    } catch (error) {
        next(error)
    }
}
}