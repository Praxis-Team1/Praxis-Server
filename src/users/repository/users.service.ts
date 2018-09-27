import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../dto/users.entity';
import { CredentialsDTO } from 'auth/dto/credentials.dto';
import { JwtPayload } from 'auth/dto/jwt-payload.interface';

import * as bcrypt from 'bcryptjs';
import { AdministratorsService } from '../../administrators/repository/administrators.service';
import { StudentsService } from '../../students/repository/students.service';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly adminService: AdministratorsService,
        @Inject(forwardRef(() => StudentsService))
        private readonly studentService: StudentsService
    ) { }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async create(user: User): Promise<User> {
        return await this.userRepository.save(user);
    }

    async validateCredentials(user: CredentialsDTO): Promise<Boolean> {
        let userDB: User = await this.userRepository.findOne({ email: user.email });
        if (!userDB) {
            return false;
        }
        let hash = bcrypt.compareSync(user.password, userDB.password);
        return hash;
    }

    async validateUser(payload: JwtPayload): Promise<User> {
        return await this.userRepository.findOne({ email: payload.email });
    }

    async getUserByEmail(email: string): Promise<User>{
        return await this.userRepository.findOne({ email: email });
    }

    async hasRoles(roles: String[], user: User): Promise<Boolean> {
        if (roles.indexOf("admin") >= 0) {
            return await this.adminService.isAdministrator(user)
        } else if (roles.indexOf("student") >= 0) {
            return await this.studentService.isStudent(user)
        } else if (roles.indexOf("teacher") >= 0) {
            return false
        }
        return false;
    }

    async getRoles(user:User){
        let isadmin = await this.adminService.isAdministrator(user);
        let isStudent = await this.studentService.isStudent(user);
        //let isTeacher = await this.studentService.isStudent(user);

        let roles = [];
        if(isadmin) roles.push('admin');
        if(isStudent) roles.push('student');

        return roles; 

    }
}
