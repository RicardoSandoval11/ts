"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginResponse = void 0;
class LoginResponse {
    constructor(token, expiresIn) {
        this.token = token;
        this.expiresIn = expiresIn;
    }
}
exports.LoginResponse = LoginResponse;
