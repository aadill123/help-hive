import { HttpStatus } from '@nestjs/common';
import { map, OperatorFunction } from 'rxjs';
import { ISuccessResponse } from '../interfaces';

export function SuccessResponseOperator<T>(
  statusCode: HttpStatus,
): OperatorFunction<T, ISuccessResponse<T>> {
  return map((data: T) => ({ data, statusCode: statusCode }));
}
