import { Router } from "express";
import router from '../Router/index.routes';
const DecoratorRoutes :Router=Router();
export function Get(path?:string |undefined){
    return function(target:any , propertykey:string , descriptor:PropertyDescriptor){
        const route = path?(path[0] === "/" ? path:"/" + path) : "/" + propertykey
        DecoratorRoutes.get(`${route}`, target[propertykey])
    }
}
export function Post(path?:string |undefined){
    return function(target:any , propertykey:string , descriptor:PropertyDescriptor){
        const route = path?(path[0] === "/" ? path:"/" + path) : "/" + propertykey 
        DecoratorRoutes.post(`${route}`, target[propertykey])
    }
}
export function Put(path?:string |undefined){
    return function(target:any , propertykey:string , descriptor:PropertyDescriptor){
        const route = path?(path[0] === "/" ? path:"/" + path) : "/" + propertykey
        DecoratorRoutes.put(`${route}`, target[propertykey])
    }
}
export function Patch(path?:string |undefined){
    return function(target:any , propertykey:string , descriptor:PropertyDescriptor){
        const route = path?(path[0] === "/" ? path:"/" + path) : "/" + propertykey
        DecoratorRoutes.patch(`${route}`, target[propertykey])
    }
}
export function Delete(path?:string |undefined){
    return function(target:any , propertykey:string , descriptor:PropertyDescriptor){
        const route = path?(path[0] === "/" ? path:"/" + path) : "/" + propertykey
        DecoratorRoutes.delete(`${route}`, target[propertykey])
    }
}
export function Controller(controllerpath?:string | undefined){
    return function(target:any){
        if(controllerpath?.[0] !== "/") controllerpath ="/" + controllerpath
        const path = controllerpath? controllerpath : "/"
        DecoratorRoutes.use(path,DecoratorRoutes)
    }
}    
export default  DecoratorRoutes