import { IsAlphanumeric, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {

  @IsAlphanumeric()
  @IsNotEmpty()
  name: string

  @IsEmail()
  email: string;

  
  @MinLength(8)
  @IsNotEmpty()
  password: string;
}