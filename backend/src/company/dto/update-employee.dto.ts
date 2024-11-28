import { IsEmail, IsString, IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateEmployeeDto {
    // @IsEmail()
    // email: string;
  
    @ApiProperty({
        description: 'Измененное имя пользователя',
        example: 'Марат Ш',
      })
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password: string;

    @IsString()
    hash: string;
}
