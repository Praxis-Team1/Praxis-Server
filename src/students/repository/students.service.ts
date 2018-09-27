import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { Repository, createQueryBuilder } from 'typeorm';
import { Student } from '../dto/student.entity';
import { User } from '../../users/dto/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStudentDto } from '../dto/createStudentDto'
import { UsersService } from '../../users/repository/users.service';
import { EmailService } from '../../email/repository/email.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
    @Inject(forwardRef(() => EmailService))
    private readonly emailService: EmailService
  ) {

  }

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
      createdStudent.admited = 'in review';
      createdStudent.semester = studentDto.semester;
      createdStudent.typeOfPraxis = studentDto.typeOfPraxis;
      createdStudent.university = studentDto.university;
      createdStudent.videoUrl = studentDto.videoUrl;

      await this.studentRepository.save(createdStudent);
      await this.emailService.successfulSignUp(newUser.email, newUser.name);
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


  async findInReviewStudents(): Promise<Object> {

    try {

      const studentList = await this.studentRepository
        .createQueryBuilder("student")
        .innerJoinAndSelect("student.user", "user")
        .where("student.admited = :admited", { admited: "in review" })
        .getMany();

      studentList.map((student) => {
        delete student.user.password;
        return student;
      })

      return studentList;

    } catch (error) {
      return error;
    }

  }

  async admissionResult(id: number, result: boolean): Promise<any> {

    try {

      const updateResult = await this.studentRepository.update({ userId: id }, { admited: (result == true ? 'accepted' : 'rejected') });
      const user = (await this.usersService.findById(id))[0];

      if (updateResult.raw.affectedRows != 0) {
        console.log(result.toString());
        if (result.toString() == 'true') {
          console.log("Entro 1");
          await this.emailService.resultTrue(user.email, user.name);
        } else {
          console.log("Entro 2");
          await this.emailService.resultFalse(user.email, user.name);
        }

        return { message: 'updated correctly' };
      } else {
        return { message: 'there is no user with that id' };
      }
    } catch (error) {
      return { error };
    }

  }
}
