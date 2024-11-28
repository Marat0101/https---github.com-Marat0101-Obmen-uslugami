import { IsEmail, IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
    // @IsEmail()
    // email: string;
  
    @ApiProperty({
        description: 'Измененное имя пользователя',
        example: 'Басиров Ринас',
      })
    @IsString()
    @IsNotEmpty()
    name: string;
}
