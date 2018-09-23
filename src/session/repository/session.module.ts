import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Session } from '../dto/session.entity'
import { SessionController } from './session.controller';
import { SessionService } from './session.service';
@Module({
    imports: [TypeOrmModule.forFeature([Session])],
    controllers: [SessionController],
    providers: [SessionService]
})
export class SessionModule { }
