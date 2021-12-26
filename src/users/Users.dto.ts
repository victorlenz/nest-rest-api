import { IsAlphanumeric, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {

  
  @IsAlphanumeric()
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  @IsEmail()
  email: string;

  
  @MinLength(8)
  @IsNotEmpty()
  password: string;
}