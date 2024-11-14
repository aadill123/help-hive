import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsEnum,
} from 'class-validator';
import { RolesEnum } from 'src/shared/enums';

export class RegisterUserDto {
  @ApiProperty({ example: 'John' })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({ example: 'john.doe@example.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: '1234567890', required: false })
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiProperty({ example: '123 Main St, Apt 4B', required: false })
  @IsString()
  @IsOptional()
  address?: string;

  @ApiProperty({ example: 'New York' })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({ example: 'NY' })
  @IsString()
  @IsNotEmpty()
  state: string;

  @ApiProperty({ example: 'USER', enum: RolesEnum })
  @IsEnum(RolesEnum)
  @IsNotEmpty()
  role: RolesEnum;

  @ApiProperty({ example: 'password' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
