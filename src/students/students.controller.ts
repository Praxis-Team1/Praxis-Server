import { Controller, Post, Body } from '@nestjs/common';
import {Student} from './student.entity'
import {CreateStudentDto} from './createStudentDto';
import {CreateValidationPipe} from '../pipes/ValidationPipe'
import {StudentsService} from './students.service'

@Controller('students')
export class StudentsController {

    constructor(private readonly studentSevice: StudentsService) { }
    
    @Post()
    create(@Body(new CreateValidationPipe()) createStudentDto: CreateStudentDto){
        return this.studentSevice.create(createStudentDto);
    }
}
