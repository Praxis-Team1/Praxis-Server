import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../dto/users.entity';
import { EmailService } from '../../email/repository/email.service'
import { CredentialsDTO } from 'auth/dto/credentials.dto';
import { JwtPayload } from 'auth/dto/jwt-payload.interface';

import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) { }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async create(user: User): Promise<User> {
        return await this.userRepository.save(user);
    }

    async validateCredentials(user: CredentialsDTO): Promise<Boolean> {
        let userDB: User = await this.userRepository.findOne({ email: user.email });
        let hash = bcrypt.compareSync(user.password, userDB.password);
        return hash;
    }

    async validateUser(payload: JwtPayload): Promise<User> {
        return await this.userRepository.findOne({ email: payload.email });
    }
}
