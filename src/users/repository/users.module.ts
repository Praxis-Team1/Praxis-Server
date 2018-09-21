import { Module } from '@nestjs/common';

import { UsersController } from './users.controller';
import { UsersService } from './users.service'

import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../dto/users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule { }
