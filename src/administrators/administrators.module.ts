import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Administrator } from './dto/administrator.entity';
import { UsersModule } from 'users/repository/users.module';
import { AdministratorsService } from './administrators.service';

@Module({
    imports: [TypeOrmModule.forFeature([Administrator])],
    providers: [AdministratorsService],
    exports: [AdministratorsService]
})
export class AdministratorsModule {}
