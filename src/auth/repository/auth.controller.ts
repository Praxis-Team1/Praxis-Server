import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CredentialsDTO } from '../dto/credentials.dto'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post()
    signIn(@Body() credentialsDTO: CredentialsDTO) {
        return this.authService.signIn(credentialsDTO)
    }
}
