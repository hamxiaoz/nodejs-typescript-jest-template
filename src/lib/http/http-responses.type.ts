export interface IErrorResponse {
  [key: string]: any;
  statusCode: number;
  error: {
    message: string;
    code?: number; // optional, FE uses this to map to application specific message
    validationErrors?: {
      field: string;
      error: string;
    }[];
    data?: any;
  };
}

export interface IDataResponse {
  [key: string]: any;
  statusCode: number;
  data: IDataItem | IDataItems;
}

export interface IDataItem {
  item: any;
}

export interface IDataItems {
  items: any[];
  totalCount: number;
  limit?: number;
  offset?: number;
}
