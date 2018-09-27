import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../dto/jwt-payload.interface';
import { UsersService } from '../../users/repository/users.service';
import { CredentialsDTO } from '../dto/credentials.dto'

@Injectable()
export class AuthService {

    constructor(
        private readonly jwtService: JwtService,
        private readonly usersService: UsersService,
    ) { }

    async signIn(user: CredentialsDTO) {
        //VALIDATE IF USER HAS ACCESS
        let validation = await this.usersService.validateCredentials(user);
        if (validation) {
            let jwtUser: JwtPayload = { email: user.email };
            return { 'token': this.jwtService.sign(jwtUser) };
        }
        throw new UnauthorizedException('Credentials are not correct');;
    }

    async validateUser(payload: JwtPayload): Promise<any> {
        return await this.usersService.validateUser(payload);
    }
}
