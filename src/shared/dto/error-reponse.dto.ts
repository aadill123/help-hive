import { ApiProperty } from '@nestjs/swagger';
import { HttpStatus } from '@nestjs/common';
import { IErrorResponse } from '../interfaces';

export class ConflictResponseDto implements IErrorResponse {
  @ApiProperty({ example: HttpStatus.CONFLICT })
  statusCode: number;

  @ApiProperty()
  message: string;
}

export class BadRequestResponseDto implements IErrorResponse {
  @ApiProperty({ example: HttpStatus.BAD_REQUEST })
  statusCode: number;

  @ApiProperty()
  message: string;
}

export class NotFoundResponseDto implements IErrorResponse {
  @ApiProperty({ example: HttpStatus.NOT_FOUND })
  statusCode: number;

  @ApiProperty()
  message: string;
}

export class UnauthorizedResponseDto implements IErrorResponse {
  @ApiProperty({ example: HttpStatus.UNAUTHORIZED })
  statusCode: number;

  @ApiProperty()
  message: string;
}

export class InternalServerErrorResponseDto implements IErrorResponse {
  @ApiProperty({ example: HttpStatus.INTERNAL_SERVER_ERROR })
  statusCode: number;

  @ApiProperty()
  message: string;
}
