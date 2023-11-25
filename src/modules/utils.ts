import { compareSync, genSaltSync, hashSync } from "bcrypt"
import { JWTPAYLOADDTO } from "../Types/type.method";
import { UserModel } from "../model/user.model";
import createHttpError from "http-errors";
import  { Algorithm} from "jsonwebtoken"
import { sign } from 'crypto';
import jwt from 'jsonwebtoken';

//Get access token and authentications...
const ACCESS_TOKEN_HASH = "b35f8922ff1d54a5aff55a1d4107e245"

export function HashStringPassword(data:string):string {
    const salt:string =  genSaltSync(10);
    const hash :string = hashSync(data,salt)
    return hash
}
export function CompareHashPass(data:string,encrypt:string):boolean{  //login user
return compareSync(data,encrypt)
}
export async function Jwtganaretor(payload:JWTPAYLOADDTO):Promise<void>{
//     const {id} = payload;
//     const user = await UserModel.findById(id)
//     if(!user) throw createHttpError.Unauthorized("User not found")
//     const expireIn = new Date().getTime() + (1000 *60 *60 *24)
//     const Algorithm:Algorithm = 'HS512'
//  sign(ACCESS_TOKEN_HASH,payload,{expireIn:expireIn,Algorithm},async(error,token)=>{
//     if(!error && token){
//        user.accesstoken
//         await user.save()
//     }
// })

    const { id } = payload;
    const user = await UserModel.findById(id);

    if (!user) {
        throw createHttpError.Unauthorized("User not found");
    }

    const expireIn = new Date().getTime() + (1000 * 60 * 60 * 24);
    const Algorithm: jwt.Algorithm = 'HS512';

    jwt.sign(payload, ACCESS_TOKEN_HASH, {
        expiresIn: expireIn,
        algorithm: Algorithm
    },async(error , token)=>{;

    if (!error && token){
        user.accesstoken = token;
        await user.save();
    }
    })
}
