export interface ISuccessResponse<T> {
  data: T | null;
  statusCode: number;
}

export interface IErrorResponse {
  statusCode: number;
  message: string;
}
