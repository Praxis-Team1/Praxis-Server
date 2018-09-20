import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import {Student} from './student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsService } from './students.service';
import { UsersService } from 'users/users.service';


@Module({
  imports: [TypeOrmModule.forFeature([Student]), UsersService],
  controllers: [StudentsController],
  providers: [StudentsService]
})
export class StudentsModule {}
