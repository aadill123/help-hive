import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { ErrorResponseOperator, SuccessResponseOperator } from '../operators';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  constructor(private readonly statusCode: HttpStatus) {}

  intercept(_: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(SuccessResponseOperator(this.statusCode), ErrorResponseOperator());
  }
}
