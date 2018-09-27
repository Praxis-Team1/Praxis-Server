import { Injectable } from '@nestjs/common';
import { Administrator } from './dto/administrator.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'users/dto/users.entity';

@Injectable()
export class AdministratorsService {
  constructor(
    @InjectRepository(Administrator)
    private readonly adminRepository: Repository<Administrator>,
  ) { }

  async isAdministrator(users: User): Promise<boolean> {
    let userDB = await this.adminRepository.findOne({ userId: users.id });
    // console.log("admin",userDB)
    if (userDB) return true;
    return false;
  }
}
