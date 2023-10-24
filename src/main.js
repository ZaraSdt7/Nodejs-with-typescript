"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const index_router_1 = __importDefault(require("./router/index.router"));
require("./app.modules");
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const PORT = 8000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(index_router_1.default);
app.use((req, res, next) => {
    const response = {
        StatusCode: 404,
        message: "Page not found",
    };
    return res.status(404).json(response);
});
server.listen(PORT, () => {
    console.log(`Server run over:http://localhost:${PORT}`);
});
