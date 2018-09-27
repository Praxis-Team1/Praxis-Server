import { Module, forwardRef } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { Student } from '../dto/student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentsService } from './students.service';
import { UsersModule } from '../../users/repository/users.module';
import { EmailService } from '../../email/repository/email.service';
import { UsersService } from '../../users/repository/users.service';


@Module({
  imports: [TypeOrmModule.forFeature([Student]), forwardRef(() => UsersModule)],
  controllers: [StudentsController],
  providers: [StudentsService, EmailService, UsersService],
  exports: [StudentsService]
})
export class StudentsModule { }
