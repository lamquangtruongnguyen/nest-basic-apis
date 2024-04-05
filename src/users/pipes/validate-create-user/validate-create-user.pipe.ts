import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    const parseAgeToInt = Number(value.age.toString());
    if (isNaN(parseAgeToInt)) {
      throw new HttpException('Invalid Age', HttpStatus.BAD_REQUEST);
    }
    return { ...value, age: parseAgeToInt };
  }
}
