import { Module, forwardRef } from '@nestjs/common';

import { UsersController } from './users.controller';
import { UsersService } from './users.service'

import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../dto/users.entity';
import { AdministratorsModule } from 'administrators/administrators.module';
import { StudentsModule } from 'students/repository/students.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), AdministratorsModule, forwardRef(() =>  StudentsModule)],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule { }
