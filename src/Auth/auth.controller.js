"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const decorator_router_1 = require("../Decorators/decorator.router");
let AuthController = class AuthController {
    Registor(req, res, next) {
        try {
            return res.send("auth");
        }
        catch (error) {
            next(error);
        }
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, decorator_router_1.POST)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "Registor", null);
exports.AuthController = AuthController = __decorate([
    (0, decorator_router_1.Controller)('/auth')
], AuthController);
exports.default = AuthController;
