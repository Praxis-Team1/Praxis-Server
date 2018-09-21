import { Controller, Get, Post, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../dto/users.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly UsersSevice: UsersService) { }

    @Get()
    findAll(): Promise<User[]> {
        return this.UsersSevice.findAll();
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async create(@Body() createUser: User): Promise<User> {
        const user = await this.UsersSevice.create(createUser);
        return user;
    }

}
