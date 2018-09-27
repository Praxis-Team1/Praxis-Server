import { Controller, Get, Post, Body, UsePipes, ValidationPipe, UseGuards, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../dto/users.entity';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'guards/roles.guard';
import { Roles } from 'guards/decorators/roles.docoratos';
import { ApiUseTags, ApiOkResponse, ApiCreatedResponse } from '@nestjs/swagger';
@ApiUseTags('users')
@Controller('users')
export class UsersController {
    constructor(private readonly UsersSevice: UsersService) { }

    
    @Get()
    @UseGuards(AuthGuard('jwt'),RolesGuard)
    @Roles('admin')
    findAll(@Req() request): Promise<User[]> {
       // return this.UsersSevice.findAll();
        return request.user;
    }
    @ApiOkResponse({ type: Boolean })
    @UseGuards(AuthGuard('jwt'))
    findAll(): Promise<User[]> {
        return this.UsersSevice.findAll();
    }

    /*
    @Post()
    @ApiCreatedResponse({ description: 'User created successfully', type: User })
    @ApiOkResponse({ type: Boolean })
    @UsePipes(new ValidationPipe({ transform: true }))

    async create(@Body() createUser: User): Promise<User> {
        const user = await this.UsersSevice.create(createUser);
        return user;
    }
    }*/

}
