import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import {Student} from './student.entity';
import {User } from '../users/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {CreateStudentDto} from './createStudentDto'
import { UsersService } from 'users/users.service';

@Injectable()
export class StudentsService {
    constructor(
        @InjectRepository(Student)
        private readonly studentRepository: Repository<Student>,
        private readonly usersService: UsersService
      ) {}

    
      async create(studentDto: CreateStudentDto): Promise<Student>{

        let createdUser = new User();
        createdUser.biographic = studentDto.biographic;
        createdUser.documentNumber = studentDto.documentNumber;
        createdUser.documentType = studentDto.documentType;
        createdUser.email= studentDto.email;
        createdUser.lastName = studentDto.lastName;
        createdUser.name  = studentDto.name;
        createdUser.password = studentDto.password;
        //Create the user using the service UsersService
        await this.usersService.create(createdUser);
        //Create the student
        let createdStudent = new Student();
        createdStudent.admited = studentDto.admited;
        createdStudent.semester = studentDto.semester;
        createdStudent.typeOfPraxis = studentDto.typeOfPraxis;
        createdStudent.university = studentDto.university;
        createdStudent.user = createdUser;
        createdStudent.videoUrl = studentDto.videoUrl;
        return await this.studentRepository.save(createdStudent)
      }
}
