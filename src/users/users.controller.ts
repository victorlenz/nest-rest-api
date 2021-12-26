import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import * as Bcrypt from 'bcrypt';
import { CreateUserDto } from './Users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) { }

    @Post('register')
    async Register(@Body() userDto: CreateUserDto) {
        const { name, email, password } = userDto;
        const hashedPassword = await Bcrypt.hash(password, 10);
        return this.userService.create({ name, email, password: hashedPassword });
    }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async Login(@Request() req){
      return req.user;

    }
}
