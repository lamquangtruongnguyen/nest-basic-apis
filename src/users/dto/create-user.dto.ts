import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  age: number;

  @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'], { message: 'Valid role required' })
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}
