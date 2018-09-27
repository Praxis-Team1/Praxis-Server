import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { CreateStudentDto } from '../dto/createStudentDto';
import { CreateValidationPipe } from '../../pipes/ValidationPipe'
import { StudentsService } from './students.service'
import { ApiUseTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { Roles } from 'guards/decorators/roles.docoratos';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'guards/roles.guard';
import { Student } from '../dto/student.entity';

@ApiUseTags('students')
@Controller('students')
export class StudentsController {

    constructor(private readonly studentSevice: StudentsService) { }

    @ApiCreatedResponse({ description: 'Student created successfully' })
    @Post()
    create(@Body(new CreateValidationPipe()) createStudentDto: CreateStudentDto) {
        return this.studentSevice.create(createStudentDto);
    }

    @ApiOkResponse({ description: 'The in review list of student returned correctly' })
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles('admin')
    @Get('/review')
    async findInReviewStudents(): Promise<any> {
        return await this.studentSevice.findInReviewStudents();
    }
}
