import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Student } from '../dto/student.entity';
import { User } from '../../users/dto/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStudentDto } from '../dto/createStudentDto'
import { UsersService } from '../../users/repository/users.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService
  ) { }

  async create(studentDto: CreateStudentDto): Promise<Object> {

    const createdUser = new User();

    createdUser.documentNumber = studentDto.documentNumber;
    createdUser.documentType = studentDto.documentType;
    createdUser.name = studentDto.name;
    createdUser.birthdate = studentDto.birthdate;
    createdUser.email = studentDto.email;
    createdUser.biography = studentDto.biography;

    //Hash the password
    const hash = bcrypt.hashSync(studentDto.password);
    createdUser.password = hash;

    //Create the user using the service UsersService

    try {
      const newUser = await this.usersService.create(createdUser);

      //Create the student
      const createdStudent = new Student();
      createdStudent.user = createdUser;
      createdStudent.admited = false;
      createdStudent.semester = studentDto.semester;
      createdStudent.typeOfPraxis = studentDto.typeOfPraxis;
      createdStudent.university = studentDto.university;
      createdStudent.videoUrl = studentDto.videoUrl;

      await this.studentRepository.save(createdStudent);
      return { message: "correctly saved" };

    } catch (error) {
      return { error };

    }

  }

  async isStudent(user: User) {
    let userDB = await this.studentRepository.findOne({ userId: user.id });
    if (userDB) return true;
    return false;
  }
}
