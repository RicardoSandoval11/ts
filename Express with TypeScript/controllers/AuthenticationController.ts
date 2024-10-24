import { LoginRequest } from "../Requests/Authentication/LoginRequest";
import { LoginResponse } from "../Responses/Authentication/LoginResponse";
import { LoginService } from "../Services/Authentication/LoginService";
import { Request, Response } from "express";


export class AuthenticationController {

    private _loginService : LoginService = new LoginService();

    public async loginAsync(req : Request, res : Response){

        const response : LoginResponse = await this._loginService.postAsync(req.body as LoginRequest);

        return res.status(200).json(response);
    }
}