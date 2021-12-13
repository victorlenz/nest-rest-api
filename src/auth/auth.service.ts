import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as Bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && (await Bcrypt.compare(user.password, pass))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}