import { Controller, Get, Post, Body, UsePipes, ValidationPipe, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../dto/users.entity';
import { AuthGuard } from '@nestjs/passport';
import { ApiUseTags, ApiOkResponse, ApiCreatedResponse } from '@nestjs/swagger';

@ApiUseTags('users')
@Controller('users')
export class UsersController {
    constructor(private readonly UsersSevice: UsersService) { }

    /*
    @Get()
    @ApiOkResponse({ type: Boolean })
    @UseGuards(AuthGuard('jwt'))
    findAll(): Promise<User[]> {
        return this.UsersSevice.findAll();
    }*/

    /*
    @Post()
    @ApiCreatedResponse({ description: 'User created successfully', type: User })
    @ApiOkResponse({ type: Boolean })
    @UsePipes(new ValidationPipe({ transform: true }))

    async create(@Body() createUser: User): Promise<User> {
        const user = await this.UsersSevice.create(createUser);
        return user;
    }*/

}
