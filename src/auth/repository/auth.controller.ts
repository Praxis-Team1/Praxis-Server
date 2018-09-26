import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CredentialsDTO } from '../dto/credentials.dto'
import { ApiUseTags, ApiOkResponse } from '@nestjs/swagger';

@ApiUseTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @ApiOkResponse({ description: 'The user successfully login' })
    @Post()
    signIn(@Body() credentialsDTO: CredentialsDTO) {
        return this.authService.signIn(credentialsDTO)
    }
}
