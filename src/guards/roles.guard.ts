
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { User } from '../users/dto/users.entity';
import { UsersService } from '../users/repository/users.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly usersService: UsersService
  ) { }

  async canActivate(context: ExecutionContext) {
    //return true;
    console.log("authentication")
    const roles: Array<String> = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) return true;
    if (roles.length === 0) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user: User = request.user;
    // console.log("user",user)
    let hasRole = await this.usersService.hasRoles(roles, user);
    if (hasRole) return true;
    return false;
  }
}
