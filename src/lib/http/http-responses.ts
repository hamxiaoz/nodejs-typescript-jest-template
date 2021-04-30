import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IDataResponse, IErrorResponse, IDataItem, IDataItems } from './http-responses.type';

export function sendResponse(res: Response, responseWrapper: IDataResponse | IErrorResponse) {
  const statusCode = responseWrapper.statusCode;
  delete responseWrapper.statusCode;
  return res.status(statusCode).send(responseWrapper);
}

export class HttpResponses {
  static DATA_RESPONSE(data: IDataItem | IDataItems, statusCode?: number): IDataResponse {
    return {
      statusCode: statusCode || StatusCodes.OK,
      data,
    };
  }

  static CREATED_RESPONSE(data: IDataItem): IDataResponse {
    return {
      statusCode: StatusCodes.CREATED,
      data,
    };
  }

  static NO_CONTENT_RESPONSE(): IDataResponse {
    return {
      statusCode: StatusCodes.NO_CONTENT,
      data: null,
    };
  }

  static ERROR(error: any): IErrorResponse {
    return {
      statusCode: error.statusCode || error.code || StatusCodes.INTERNAL_SERVER_ERROR,
      error: {
        message: error.message || error,
        data: error.data || null,
      },
    };
  }

  static ERROR_NOT_IMPLEMENTED(): IErrorResponse {
    return {
      statusCode: StatusCodes.NOT_IMPLEMENTED,
      error: {
        message: 'Invalid http method request',
      },
    };
  }

  static ERROR_UNAUTHORIZED(): IErrorResponse {
    return {
      statusCode: StatusCodes.UNAUTHORIZED,
      error: {
        message: 'Unauthorized',
      },
    };
  }

  static ERROR_FORBIDDEN(): IErrorResponse {
    return {
      statusCode: StatusCodes.FORBIDDEN,
      error: {
        message: 'Forbidden Request',
      },
    };
  }

  static ERROR_NOT_FOUND(error: any): IErrorResponse {
    return {
      statusCode: StatusCodes.NOT_FOUND,
      error: {
        message: error,
      },
    };
  }
}
