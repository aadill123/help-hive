import {
  ConflictException,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { catchError, throwError } from 'rxjs';
import { ConflictError } from '../errors';

export function ErrorResponseOperator() {
  return catchError((err: Error) => {
    if (err instanceof ConflictError)
      return throwError(() => new ConflictException(err.toString()));
 
    return throwError(() => new InternalServerErrorException(err.toString()));
  });
}
