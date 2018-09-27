import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/repository/users.module';
import { StudentsModule } from './students/repository/students.module';
import { EmailModule } from './email/repository/email.module';
import { AuthModule } from './auth/repository/auth.module';
import { SessionModule } from './session/repository/session.module';
import { HealthStatusController } from './health-status/health-status.controller';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'guards/roles.guard';
import { AdministratorsModule } from './administrators/administrators.module';

require('dotenv').config()

@Module({
  providers: [
 /*   {
      provide: APP_GUARD,
      useClass: RolesGuard,
    }*/
  ],
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
  })
    , UsersModule, StudentsModule, AuthModule, SessionModule, EmailModule, AdministratorsModule],
  controllers: [HealthStatusController],
})
export class AppModule { }

