"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = exports.DELETE = exports.PACTH = exports.POST = exports.GET = void 0;
const express_1 = require("express");
const DecoratorRouter = (0, express_1.Router)();
function GET(path) {
    return function (target, propertykey, descriptor) {
        const route = path ? (path[0] == "/" ? path : "/" + path) : "/" + propertykey;
        DecoratorRouter.get(route, descriptor.value); // target[propertykey] = descriptor.value 
    };
}
exports.GET = GET;
function POST(path) {
    return function (target, propertykey, descriptor) {
        const route = path ? (path[0] == "/" ? path : "/" + path) : "/" + propertykey;
        DecoratorRouter.post(`${route} `, target[propertykey]); // target[propertykey] = descriptor.value 
    };
}
exports.POST = POST;
function PACTH(path) {
    return function (target, propertykey, descriptor) {
        const route = path ? (path[0] == "/" ? path : "/" + path) : "/" + propertykey;
        DecoratorRouter.patch(`${route} `, target[propertykey]); // target[propertykey] = descriptor.value 
    };
}
exports.PACTH = PACTH;
function DELETE(path) {
    return function (target, propertykey, descriptor) {
        const route = path ? (path[0] == "/" ? path : "/" + path) : "/" + propertykey;
        DecoratorRouter.delete(`${route} `, target[propertykey]); // target[propertykey] = descriptor.value 
    };
}
exports.DELETE = DELETE;
function Controller(controllerpath) {
    return function (target) {
        if ((controllerpath === null || controllerpath === void 0 ? void 0 : controllerpath[0]) == "/")
            controllerpath = "/" + controllerpath;
        const path = controllerpath ? controllerpath : "/";
        DecoratorRouter.use(path, DecoratorRouter);
    };
}
exports.Controller = Controller;
exports.default = DecoratorRouter;
