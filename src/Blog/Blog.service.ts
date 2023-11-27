import { validateSync } from "class-validator";
import { IBlog } from '../Types/blog.types';
import { BlogIDDTO, CreateBlogDTO } from "./Blog.dto";
import { ErrorHandler } from "../modules/utils";
import createHttpError from "http-errors";
import { BlogModel } from "../model/blog.model";
import { FindDoc } from '../Types/type.method';

export class BlogService{
    async CreateBlog(blogdto:CreateBlogDTO):Promise<IBlog>{
        const erros = validateSync(blogdto)
        const CheckedError = ErrorHandler(erros)
        if(CheckedError.length>0) throw new createHttpError.BadRequest("Validator error" + CheckedError)
        const blog:IBlog = await BlogModel.create(blogdto)
    return blog
    }
    async FetchAll():Promise<IBlog[]>{
        const blog:IBlog[] =await BlogModel.find({})
        return blog
    }

    async FetchById(blogid:BlogIDDTO):Promise<FindDoc<IBlog>>{
     const fetchid:FindDoc<IBlog> =await BlogModel.findById(blogid.id)
     if(!fetchid) throw new createHttpError.NotFound("logID not found")
     return fetchid
    }
    async DeleteByID(blogid:BlogIDDTO):Promise<string>{
     const blogdel:FindDoc<IBlog> = await this.FetchById(blogid)
     const result:any = await BlogModel.deleteOne({_id:blogid.id})
     if(result.deletedCount >0)   return "Delete ID success"
     return "Error:Delete faild"
    }
}