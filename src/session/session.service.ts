import { Injectable } from '@nestjs/common';
import { Session } from './session.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SessionService {

    constructor(
        @InjectRepository(Session)
        private readonly sessionRepository: Repository<Session>
    ) { }

    async findAll(): Promise<Session[]> {
        return await this.sessionRepository.find({ 
            order: {
                date: "ASC",
            }
        });
    }
}
