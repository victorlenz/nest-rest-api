import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModel } from 'src/Database/Models/Users.model';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.auth.strategy';

@Module({
  providers: [AuthService, UsersService, LocalStrategy],
  imports : [PassportModule, TypeOrmModule.forFeature([UsersModel])]
})
export class AuthModule {}
