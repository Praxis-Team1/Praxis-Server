import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Student } from '../dto/student.entity';
import { User } from 'users/dto/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStudentDto } from '../dto/createStudentDto'
import { UsersService } from 'users/repository/users.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    private readonly usersService: UsersService
  ) { }


  async create(studentDto: CreateStudentDto): Promise<Object> {

    let createdUser = new User();
    createdUser.biography = studentDto.biography;
    createdUser.documentNumber = studentDto.documentNumber;
    createdUser.documentType = studentDto.documentType;
    createdUser.email = studentDto.email;
    createdUser.name = studentDto.name;
    //Hash the password
    let hash = bcrypt.hashSync(studentDto.password);
    createdUser.password = hash;
    //Create the user using the service UsersService
    await this.usersService.create(createdUser);
    //Create the student
    let createdStudent = new Student();
    createdStudent.user = createdUser;
    createdStudent.admited = false;
    createdStudent.semester = studentDto.semester;
    createdStudent.typeOfPraxis = studentDto.typeOfPraxis;
    createdStudent.university = studentDto.university;
    createdStudent.videoUrl = studentDto.videoUrl;
    try {
      await this.studentRepository.save(createdStudent);
      return { message: "correctly saved" };
    } catch (err) {
      return { message: "Error saving", error: err };;
    }
  }
}
