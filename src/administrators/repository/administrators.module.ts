import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Administrator } from '../dto/administrator.entity';
import { UsersModule } from 'users/repository/users.module';
import { AdministratorsService } from './administrators.service';
import { StudentsService } from 'students/repository/students.service';
import { StudentsModule } from 'students/repository/students.module';

@Module({
    imports: [TypeOrmModule.forFeature([Administrator])],
    providers: [AdministratorsService],
    exports: [AdministratorsService]
})
export class AdministratorsModule { }
