import { LoginResponse } from './../../Responses/Authentication/LoginResponse';
import { IServicePost } from "../../interfaces/Services/IServicePost";
import { LoginRequest } from "../../Requests/Authentication/LoginRequest";

export class LoginService implements IServicePost<LoginRequest, LoginResponse>{

    public postAsync: (request: LoginRequest) => Promise<LoginResponse> = async(request: LoginRequest) : Promise<LoginResponse> => {

        try{
            return new LoginResponse(
                "dahlshdlashkd",
                3600
            );
        }
        finally{
            console.log("Terminando traza");
        }
    }
}
