"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const AuthenticationRoutes_1 = __importDefault(require("./Routes/AuthenticationRoutes"));
const app = (0, express_1.default)();
dotenv_1.default.config({
    path: '.env'
});
app.use(AuthenticationRoutes_1.default);
const appPort = process.env.APPLICATION_PORT || 3000;
app.listen(appPort, () => {
    console.log(`Application running on ${appPort}`);
});
