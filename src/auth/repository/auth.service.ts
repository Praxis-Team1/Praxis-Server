import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../dto/jwt-payload.interface';
import { UsersService } from '../../users/repository/users.service';
import { CredentialsDTO } from '../dto/credentials.dto'
import { User } from '../../users/dto/users.entity';

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
            let userDB: User = await this.usersService.getUserByEmail(user.email);
            let roles = await this.usersService.getRoles(userDB);
            let jwtUser: JwtPayload = { email: user.email , roles: roles};
            return { 'token': this.jwtService.sign(jwtUser) };
        }
        throw new UnauthorizedException('Credentials are not correct');;
    }

    async validateUser(payload: JwtPayload): Promise<any> {
        return await this.usersService.validateUser(payload);
    }
}
