import { Expose } from 'class-transformer';
import { IsDefined, Matches } from 'class-validator';
import { ObjectId } from 'mongodb';
export class CreateBlogDTO{
@IsDefined()
@Expose()
title:string
@IsDefined()
@Expose()
text:string
@IsDefined()
@Expose()
author:string

}
export class BlogIDDTO{
@Matches(RegExp(/^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i))
id:ObjectId
}