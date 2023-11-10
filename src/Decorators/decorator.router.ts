import { Router } from "express";

 const DecoratorRouter:Router =Router();
 export function GET(path?:string | undefined){
 return function(target:any,propertykey:string , descriptor:PropertyDescriptor){
 const route = path?(path[0] == "/" ?path:"/" + path): "/" + propertykey
 DecoratorRouter.get(route ,target[propertykey])   // target[propertykey] = descriptor.value 
 }   
 }
 export function POST(path?:string | undefined){
 return function(target:any,propertykey:string , descriptor:PropertyDescriptor){
const route = path?(path[0] == "/" ?path:"/" + path): "/" + propertykey
DecoratorRouter.post(`${route} ` , target[propertykey])   // target[propertykey] = descriptor.value 
}   
}
export function PACTH(path?:string | undefined){
return function(target:any,propertykey:string , descriptor:PropertyDescriptor){
const route = path?(path[0] == "/" ?path:"/" + path): "/" + propertykey
 DecoratorRouter.patch(`${route} ` , target[propertykey])   // target[propertykey] = descriptor.value 
 }   
 }
 export function DELETE(path?:string | undefined){
return function(target:any,propertykey:string , descriptor:PropertyDescriptor){
const route = path?(path[0] == "/" ?path:"/" + path): "/" + propertykey
DecoratorRouter.delete(`${route} ` , target[propertykey])   // target[propertykey] = descriptor.value 
}   
}
export function Controller(controllerpath?:string |undefined){
return function(target:any){
if(controllerpath?.[0] ! == "/") controllerpath = "/" + controllerpath 
const path = controllerpath? controllerpath : "/"
DecoratorRouter.use(path,DecoratorRouter)   
}    
}            

 export default DecoratorRouter
