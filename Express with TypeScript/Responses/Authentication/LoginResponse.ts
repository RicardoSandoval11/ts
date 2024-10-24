

export class LoginResponse {
    
    constructor(
        public token: string,
        public expiresIn: number
    ){}
}