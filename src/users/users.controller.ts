import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly UsersSevice: UsersService) { }

    @Get()
    findAll(): Promise<User[]> {
        return this.UsersSevice.findAll();
    }

}
