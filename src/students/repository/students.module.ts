import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { Student } from '../dto/student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsService } from './students.service';
import { UsersModule } from 'users/repository/users.module';


@Module({
  imports: [TypeOrmModule.forFeature([Student]), UsersModule],
  controllers: [StudentsController],
  providers: [StudentsService]
})
export class StudentsModule { }
