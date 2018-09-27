import { Controller, Post, Get, Req } from '@nestjs/common';
import { AdministratorsService } from './administrators.service';
import { Student } from 'students/dto/student.entity';
import { StudentsService } from '../../students/repository/students.service';

@Controller('administrators')
export class AdministratorsController {

    constructor(private readonly administratorsService: AdministratorsService,
        private readonly studentsService: StudentsService) { }

    /*
@Get()
findOutstandingStudents(@Req() request): Promise<Student[]> {

    return await this.studentsService.
}*/
}
