import { getReasonPhrase, StatusCodes } from 'http-status-codes';
import { ValidationError } from 'express-validator';

export default class ApplicationError extends Error {
  public statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  public message = getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR);
  public detail?: string;
  public data?: string | ValidationError[];

  constructor(statusCode?: number, message?: string, detail?: string, data?: string | ValidationError[]) {
    super();
    if (message != null) {
      this.message = message;
    }
    if (statusCode != null) {
      this.statusCode = statusCode;
    }
    this.detail = detail;
    this.data = data;
  }
}
