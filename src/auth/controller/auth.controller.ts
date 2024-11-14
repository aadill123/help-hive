import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';

import { AuthService } from '../services';
import { RegisterUserDto, UpdateAuthDto } from '../dto';
import { IRegisterUser } from '../interfaces';
import { BadRequestResponseDto, ConflictResponseDto, InternalServerErrorResponseDto, NotFoundResponseDto } from 'src/shared/dto';
import { HttpStatusDescriptionEnum } from 'src/shared/enums/https-status-description.enums';
import { ResponseInterceptor } from 'src/shared/interceptors/response.interceptor';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseInterceptors(
    new ResponseInterceptor(HttpStatus.CREATED)
  )
  @ApiOperation({
    summary: 'Register a new user',
    description: 'This endpoint allows users to register in the system.',
  })
   @ApiInternalServerErrorResponse({
    type: InternalServerErrorResponseDto,
    description: HttpStatusDescriptionEnum.INTERNAL_SERVER_ERROR,
  })
  @ApiNotFoundResponse({
    type: NotFoundResponseDto,
    description: HttpStatusDescriptionEnum.NOT_FOUND,
  })
  @ApiBadRequestResponse({
    type: BadRequestResponseDto,
    description: HttpStatusDescriptionEnum.BAD_REQUEST,
  })
  @ApiConflictResponse({
    type: ConflictResponseDto,
    description: HttpStatusDescriptionEnum.CONFLICT,
  })
  // @ApiCreatedResponse({
  //   type: ResponseRegisterUserDto,
  //   description: HttpStatusDescriptionEnum.CREATED,
  // })
  @ApiBody({ type: RegisterUserDto })
  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  async register(@Body() registerUserDto: IRegisterUser) {
    return await this.authService.create(registerUserDto);
  }
}
