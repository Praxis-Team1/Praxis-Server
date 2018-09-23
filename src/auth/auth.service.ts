import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { UsersService } from 'users/repository/users.service';
import {CredentialsDTO} from './interfaces/credentials.dto'

@Injectable()
export class AuthService {
  
    constructor(
        private readonly jwtService: JwtService,
        private readonly usersService: UsersService,
    ){}

    async signIn(user:CredentialsDTO){
        //VALIDATE IF USER HAS ACCES
        let validation = await this.usersService.validateCredentials(user);
        if(validation){
            let jwtUser:JwtPayload = {email:user.email}; 
            return this.jwtService.sign(jwtUser)
        }
        throw new UnauthorizedException('Credentials are not correct');;
    }

    async validateUser(payload: JwtPayload): Promise<any> {
        return await this.usersService.validateUser(payload);
      }
}
