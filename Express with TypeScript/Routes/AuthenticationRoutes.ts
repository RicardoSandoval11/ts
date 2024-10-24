import express from 'express';
import { AuthenticationController } from '../controllers/AuthenticationController';
import { LoginRequest } from '../Requests/Authentication/LoginRequest';


const authRoute = express.Router();

const authenticationController = new AuthenticationController();

authRoute.post('/auth/login', async(request, response) => {
    await authenticationController.loginAsync(request, response)
});

export default authRoute;