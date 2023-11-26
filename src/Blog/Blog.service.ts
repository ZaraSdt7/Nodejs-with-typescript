import { validateSync } from "class-validator";
import { IBlog } from "../Types/blog.types";
import { CreateBlogDTO } from "./Blog.dto";
import { ErrorHandler } from "../modules/utils";
import createHttpError from "http-errors";
import { BlogModel } from "../model/blog.model";

export class BlogService{
    async CreateBlog(blogdto:CreateBlogDTO):Promise<IBlog>{
        const erros = validateSync(blogdto)
        const CheckedError = ErrorHandler(erros)
        if(CheckedError.length>0) throw new createHttpError.BadRequest("Validator error" + CheckedError)
        const blog:IBlog = await BlogModel.create(blogdto)
    return blog
    }
    
}