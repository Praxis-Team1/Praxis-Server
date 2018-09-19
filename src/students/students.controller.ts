import { Controller, Post, Body } from '@nestjs/common';
import {Student} from './student.entity'
import {CreateValidationPipe} from '../pipes/ValidationPipe'

@Controller('students')
export class StudentsController {
    
    @Post()
    create(@Body(new CreateValidationPipe()) createStudentDto: Student){
        return "Student created";
    }
}
