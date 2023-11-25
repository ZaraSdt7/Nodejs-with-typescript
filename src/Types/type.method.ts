import { ObjectId } from "mongodb"
import { Iuser } from './user.type';

export type ResponseMethods={
StatusCode:number,
message?:string,
data?:string | undefined,
errors?:object |undefined
}
export  type finduser= Iuser &{_id:ObjectId} | null

export interface JWTPAYLOADDTO{
    id:ObjectId,
    username:Iuser['username']
}