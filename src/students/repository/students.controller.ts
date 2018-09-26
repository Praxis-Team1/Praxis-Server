import { Controller, Post, Body } from '@nestjs/common';
import { CreateStudentDto } from '../dto/createStudentDto';
import { CreateValidationPipe } from '../../pipes/ValidationPipe'
import { StudentsService } from './students.service'
import { ApiUseTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';

@ApiUseTags('students')
@ApiOkResponse({ type: Boolean })
@Controller('students')
export class StudentsController {

    constructor(private readonly studentSevice: StudentsService) { }

    @ApiCreatedResponse({ description: 'Student created successfully', type: CreateStudentDto })
    @Post()
    create(@Body(new CreateValidationPipe()) createStudentDto: CreateStudentDto) {
        return this.studentSevice.create(createStudentDto);
    }
}
