import { Controller, Post, Body } from '@nestjs/common';
import {CreateStudentDto} from './createStudentDto'
import {CreateValidationPipe} from '../pipes/ValidationPipe'

@Controller('students')
export class StudentsController {
    
    @Post()
    create(@Body(new CreateValidationPipe()) createStudentDto: CreateStudentDto){
        return "Student created";
    }
}
